const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  }
});

// UserSchema.pre('save', function(next){
//   let User = this;

//   if(!User.isModified('password')) return next();


// })

// UserSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
// };

// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// };



module.exports = mongoose.model('User', UserSchema);
