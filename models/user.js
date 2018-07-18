const mongoose = require('mongoose');
const md5 = require('md5')

const UserShema = new mongoose.Schema({
  password: String,
  email: String
});

UserShema.pre('save', function(next ) {
	console.l
	this.password = md5(this.password)
	next()
})

UserShema.methods.checkPassword = function(password){
	console.log(password, this.password, md5(password),  this.password === md5(password))
	return this.password === md5(password)
}

module.exports = mongoose.model('Users', UserShema);
