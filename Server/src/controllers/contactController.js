// const Contact = require('../models/Contact.js');
// const { sendEmail } = require('../utils/sendEmail.js');

// const submitContactForm = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, message: 'All fields are required.' });
//     }

//     const contact = await Contact.create({ name, email, message });

//     // Optional: send email to admin
//     await sendEmail('kumarnitishbxrr@gmail.com', 'New Contact Message', `${name} (${email}): ${message}`);

//     res.status(201).json({
//       success: true,
//       message: 'Message received successfully!',
//       data: contact,
//     });
//   } catch (error) {
//     console.error('❌ Error:', error);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// module.exports = { submitContactForm };

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');
const { sendEmail } = require('../utils/sendEmail.js');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ success: false, message: 'All fields required' });

    // Save to DB
    const contact = await Contact.create({ name, email, message });

    // Send email (non-blocking)
    sendEmail('kumarnitishbxrr@gmail.com', 'New Contact Message', `${name} (${email}): ${message}`)
      .catch(err => console.error('Email failed:', err.message));

    res.status(201).json({ success: true, message: 'Message received!', data: contact });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

