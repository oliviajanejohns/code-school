const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection : 'user' });
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;