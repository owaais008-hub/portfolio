// EmailJS Configuration
// Follow these steps to set up EmailJS:

/*
STEP 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

STEP 2: Create an Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (owaais008@gmail.com)
5. Copy the Service ID (e.g., "service_xxxxxxx")

STEP 3: Create an Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template structure:

   Subject: New Contact from {{from_name}}
   
   Body:
   You have received a new message from your portfolio website!
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}

4. Copy the Template ID (e.g., "template_xxxxxxx")

STEP 4: Get Your Public Key
1. Go to Account > General
2. Copy your Public Key (e.g., "xxxxxxxxxxxxxxx")

STEP 5: Update the Contact.tsx file
Replace the placeholder values in Contact.tsx with your actual values:
- service_portfolio → Your Service ID
- template_portfolio → Your Template ID  
- YOUR_PUBLIC_KEY → Your Public Key
*/

// ✅ COMPLETE CONFIGURATION - All values are CORRECT!
export const emailConfig = {
    serviceId: 'service_nfgo34u',       // ✅ Your Service ID (CORRECT!)
    templateId: 'template_g6acsc4',     // ✅ Your Template ID (CORRECT!)
    publicKey: '3Fv5kAAaDO925h8Gt'      // ✅ Your Public Key
};

// Contact Information:
// Your email: owaais008@gmail.com
// Your phone: +92 331 6078214

// 🔒 SECURITY NOTE:
// Never share your Private Key (QsFh7PxLU4ONktqj6Viw1) in frontend code!
// Only the Public Key is used in the website.
