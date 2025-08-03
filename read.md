# Luxury Spa Website

This is a simple website for a luxury spa. It includes a contact form that sends an email to the spa when a user submits it.

## Frontend

The frontend is built with HTML, CSS, and vanilla JavaScript.

- `index.html`: The main HTML file.
- `style.css`: The stylesheet for the website.
- `script.js`: The JavaScript file that handles the form submission and other interactive features.

## How It Works

This project uses [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend, so there is no backend required.

When a user fills out the contact form on the website, the frontend uses the EmailJS SDK to send the form data to a pre-configured email address. The EmailJS service is configured with the following credentials:

-   **Service ID:** `service_3b8loxl`
-   **Template ID:** `template_ddo5a6c`
-   **User ID:** `Yn1OZx_NMefdIIyVT`

To use this project, you will need to have an EmailJS account and configure it with your own email address.