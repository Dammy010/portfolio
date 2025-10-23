# Portfolio Backend API

This is the backend API for Damilare Akinola's portfolio website.

## Features

- Contact form email handling
- CORS enabled for frontend communication
- Email notifications to portfolio owner
- Confirmation emails to form submitters

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure email settings:
   - Copy `config.example.js` to `config.js`
   - Update with your actual email credentials
   - **Never commit `config.js` to version control**

3. Start the server:

```bash
npm start
```

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**

```json
{
  "message": "Email sent successfully"
}
```

## Environment Variables

Create a `.env` file with:

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CONTACT_EMAIL

## Security

⚠️ **IMPORTANT**: Never commit sensitive information to version control!

- `config.js` contains your email credentials
- Use `config.example.js` as a template
- Add `config.js` to `.gitignore`
- Use environment variables in production

## Dependencies

- Express.js - Web framework
- Nodemailer - Email sending
- CORS - Cross-origin resource sharing
