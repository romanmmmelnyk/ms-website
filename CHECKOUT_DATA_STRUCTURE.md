# Checkout Data Structure

## API Endpoint
**POST** `/api/applications/checkout`

## Request Payload Structure

This is the exact structure sent from the frontend form:

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "about": "I'm a professional model based in London...",
  "purposes": ["management-board", "personal-website", "booking-system"],
  "customDesign": true,
  "paymentPlan": "monthly"
}
```

### Frontend Implementation

The payload is sent from `ModelApplyView.vue`:

```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8210'
const response = await fetch(`${apiUrl}/api/applications/checkout`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: formData.value.email,
    firstName: formData.value.firstName,
    lastName: formData.value.lastName,
    about: formData.value.about,
    purposes: formData.value.purposes,
    customDesign: formData.value.customDesign,
    paymentPlan: formData.value.paymentPlan
  })
})
```

## Field Descriptions

### `email` (string, required)
- User's email address
- Collected in Step 1

### `firstName` (string, required)
- User's first name
- Collected in Step 2

### `lastName` (string, required)
- User's last name
- Collected in Step 2

### `about` (string, required)
- User's background/description
- Free text field
- Collected in Step 3

### `purposes` (array of strings, required)
- Array of selected service purposes
- Possible values:
  - `"management-board"` - Management Board access
  - `"personal-website"` - Personal Website
  - `"booking-system"` - Booking System
- Collected in Step 4
- Multiple selections allowed

### `customDesign` (boolean, required)
- Whether user selected custom design option
- `true` or `false`
- Collected in Step 5

### `paymentPlan` (string, required)
- Selected payment plan
- Possible values:
  - `"monthly"` - Monthly subscription (£60 setup + £19.99/month)
  - `"lifetime"` - One-time payment (£400)
- Collected in Step 5

## Example Payloads

### Monthly Plan without Custom Design
```json
{
  "email": "model@example.com",
  "firstName": "Sarah",
  "lastName": "Johnson",
  "about": "Professional fashion model with 10 years experience",
  "purposes": ["personal-website", "booking-system"],
  "customDesign": false,
  "paymentPlan": "monthly"
}
```

### Monthly Plan with Custom Design
```json
{
  "email": "model@example.com",
  "firstName": "Sarah",
  "lastName": "Johnson",
  "about": "Professional fashion model with 10 years experience",
  "purposes": ["management-board", "personal-website", "booking-system"],
  "customDesign": true,
  "paymentPlan": "monthly"
}
```

### One-Time Plan with Custom Design
```json
{
  "email": "model@example.com",
  "firstName": "David",
  "lastName": "Smith",
  "about": "Aspiring actor and model",
  "purposes": ["personal-website"],
  "customDesign": true,
  "paymentPlan": "lifetime"
}
```

## Pricing Calculation

### Monthly Plan
- **Base**: £60 setup + £19.99/month
- **With Custom Design**: £60 setup + £29.99/month (first payment: £89.99)
- First payment includes setup fee + first month

### One-Time Plan
- **Base**: £400
- **With Custom Design**: £550

## Backend Implementation Notes

The backend should:
1. Calculate total amount based on `paymentPlan` and `customDesign`
2. Store application data in database with status "pending_payment"
3. Create Stripe Checkout Session with appropriate pricing
4. Return checkout URL to frontend

### Stripe Session Configuration

**Monthly Plan:**
- Setup fee: £60 (one-time)
- Recurring price: £19.99/month (or £29.99/month with custom design)
- Use `mode: 'subscription'` with setup fee as additional line item

**One-Time Plan:**
- Payment amount: £400 (or £550 with custom design)
- Use `mode: 'payment'`

