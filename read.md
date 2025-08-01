# Luxury Spa Website

This is a simple website for a luxury spa. It includes a contact form that sends an email to the spa when a user submits it.

## Frontend

The frontend is built with HTML, CSS, and vanilla JavaScript.

- `index.html`: The main HTML file.
- `style.css`: The stylesheet for the website.
- `script.js`: The JavaScript file that handles the form submission and other interactive features.

## Backend

The backend is a simple Node.js server using Express.

- `server.js`: The main server file.
- `package.json`: The project's dependencies.

### Running the Backend

To run the backend server, follow these steps:

1.  **Install the dependencies:**
    ```bash
    npm install
    ```

2.  **Start the server:**
    ```bash
    node server.js
    ```

The server will start on `http://localhost:3000`.

### How It Works

When a user fills out the contact form on the website, the frontend sends a POST request to the `/send` endpoint on the backend. The backend then uses Nodemailer to send an email with the form data to a pre-configured email address.