# Backend Integration for Stripe Checkout

## Frontend is Ready ✅

The frontend is now set up to send data to `/api/applications/checkout` and handle the Stripe redirect.

## Environment Configuration

Create a `.env` file in the project root:

```bash
# Development
VITE_API_URL=http://localhost:8210

# Production (update when deploying)
# VITE_API_URL=https://api.yourdomain.com
```

## Backend Implementation Guide

### Required: Backend API Endpoint

Create an endpoint that will:

1. **Receive application data** from frontend
2. **Store application** in your database
3. **Create Stripe Checkout Session** with application reference
4. **Return checkout URL** to frontend

### Example Backend Endpoint (Node.js/Express)

```javascript
// POST /api/applications/checkout
import Stripe from 'stripe';
import { saveApplication } from './database';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/applications/checkout', async (req, res) => {
  try {
    const { email, firstName, lastName, about, purposes } = req.body;

    // Save application to database
    const applicationId = await saveApplication({
      email,
      firstName,
      lastName,
      about,
      purposes,
      status: 'pending_payment'
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Model Website Application',
              description: 'Website development for model portfolio'
            },
            unit_amount: 24900, // £249.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/apply-model?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/apply-model?canceled=true`,
      metadata: {
        applicationId: applicationId,
        email: email,
        firstName: firstName,
        lastName: lastName
      },
      customer_email: email,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Handle Stripe webhook
app.post('/api/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const applicationId = session.metadata.applicationId;
      
      // Update application status in database
      await updateApplicationStatus(applicationId, 'paid');
      
      // Send confirmation email
      await sendConfirmationEmail({
        email: session.customer_email,
        name: session.metadata.firstName
      });
    }

    res.json({ received: true });
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});
```

### Environment Variables Needed

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
BASE_URL=https://yourdomain.com
```

### Features

✅ **Secure**: Secret keys stay on backend  
✅ **Persistent**: Application data saved in database  
✅ **Reliable**: Webhooks confirm payment completion  
✅ **Email**: Automated confirmation emails  
✅ **Metadata**: Track application through Stripe session  

### Database Schema

```sql
applications (
  id UUID PRIMARY KEY,
  email VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  about TEXT,
  purposes JSON,
  status VARCHAR, -- pending_payment, paid, processing, complete
  stripe_session_id VARCHAR,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

### Success/Cancel Handling

After Stripe redirects back, handle the query params:

```javascript
// In ModelApplyView.vue
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.get('success') === 'true') {
    // Show success message
    currentStep.value = 5;
  }
  
  if (urlParams.get('canceled') === 'true') {
    // Show cancellation message
  }
});
```

