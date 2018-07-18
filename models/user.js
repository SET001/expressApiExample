const mongoose = require('mongoose');
const md5 = require('md5')

const UserShema = new mongoose.Schema({
  password: String,
  email: String
});

UserShema.pre('save', function(next ) {
	this.password = md5(this.password)
	next()
})

UserShema.methods.checkPassword = function(password){
	return this.password === md5(password)
}

module.exports = mongoose.model('Users', UserShema);
