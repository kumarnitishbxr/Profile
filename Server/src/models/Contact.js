// const mongoose = require ('mongoose');
// const { Schema } = mongoose;

// const contactSchema = new Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//     trim: true,
//     maxlength: 50,
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     trim: true,
//     lowercase: true,
//     match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
//   },
//   message: {
//     type: String,
//     required: [true, "Message is required"],
//     trim: true,
//     maxlength: 1000,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Export model
// const Contact = mongoose.model('Contact', contactSchema);
// module.exports = Contact;


const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 50 },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true, maxlength: 1000 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
