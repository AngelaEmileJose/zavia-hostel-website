const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// API endpoint for form submission
app.post('/submit-form', (req, res) => {
    const { name, phone, message } = req.body;

    // In a real-world scenario, you would process the data here.
    // For this example, we'll just log it and send a success response.
    console.log(`Received new booking inquiry from: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    // Here, you would typically integrate with a messaging API (like Twilio, Vonage, etc.)
    // to send a WhatsApp message or an email notification to the hostel management.
    // For this demonstration, we'll send a simple success response to the client.

    res.status(200).json({
        success: true,
        message: 'Form submitted successfully! You will be redirected to WhatsApp.',
        whatsappUrl: `https://wa.me/919846469020?text=${encodeURIComponent(`Hello Zavia Hostel, I'm ${name}. I'm interested in booking. My message: ${message}. My phone number is ${phone}.`)}`
    });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
