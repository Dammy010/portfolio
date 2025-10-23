// Email Configuration Template
// Copy this file to config.js and update with your actual values

export const emailConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@gmail.com", // Your Gmail address
    pass: "your-app-password", // Your Gmail app password
  },
};

// Server Configuration
export const serverConfig = {
  port: 3001,
  contactEmail: "your-contact-email@gmail.com", // Where to send contact form emails
};

// Instructions:
// 1. Copy this file to config.js
// 2. Replace the placeholder values with your actual credentials
// 3. Never commit config.js to version control
// 4. For Gmail app password: https://support.google.com/accounts/answer/185833
