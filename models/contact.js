/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

contactSchema = new Schema( {
  unique_id: Number,
  name: String,
  email: String,
  mobile: String,
}),
Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
