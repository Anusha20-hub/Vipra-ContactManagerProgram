
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

contactSchema = new Schema( {
  unique_id: { type : Number, unique : true, required : true, dropDups: true},
  name: { type : String, required : true},
  email: { type : String, unique : true, required : true, dropDups: true},
  mobile: { type : String , required : true}
}),

//enforces unique constraints on mongodb
contactSchema.plugin(uniqueValidator);
Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
