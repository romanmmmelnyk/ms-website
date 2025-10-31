# API Endpoints Documentation

## Current Endpoints

### 1. Contact Forms (Enquiries)

**URL:** `https://server.moth.solutions/enquiries` (hardcoded)
- ContactModal.vue
- ApplyView.vue

**Method:** POST

**Payload:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Company Name",
  "projectType": "website",
  "budget": "5000-10000",
  "timeline": "2-3-months",
  "message": "Project description",
  "newsletter": true
}
```

---

### 2. Models Application (Checkout)

**URL:** `${VITE_API_URL}/api/applications/checkout`
- Default: `http://localhost:8210/api/applications/checkout`
- Environment variable: `VITE_API_URL` in `.env`

**Method:** POST

**Payload:**
```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "about": "User background...",
  "purposes": ["management-board", "personal-website", "booking-system"],
  "customDesign": true,
  "paymentPlan": "monthly"
}
```

## Configuration

### Environment Variables

Create `.env` file:
```bash
# Development/Staging Backend
VITE_API_URL=http://localhost:8210

# Production (update when deploying)
# VITE_API_URL=https://api.yourdomain.com
```

### Contact Form Endpoints

Currently hardcoded to `https://server.moth.solutions/enquiries`

**To make configurable**, update ContactModal.vue and ApplyView.vue:

```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'https://server.moth.solutions'
const response = await fetch(`${apiUrl}/enquiries`, {
  // ...
})
```

## Summary

- **Contact Forms:** Always use `https://server.moth.solutions/enquiries`
- **Models Apply:** Uses `VITE_API_URL` environment variable for flexibility


