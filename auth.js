const jwt = require('jsonwebtoken')
const User = require('./models/user')
const config = require('./config')
const {omit} = require('ramda')

module.exports.register = async (req, res) => {
	const {email, password} = req.body
	const user = await User.findOne({email})
	if (user){
		res.status(400).send(`User with email ${email} alriedy exist!`)
	}else {
		const user = new User(req.body)
		await user.save()
		const avatarLink = req.file
			? `http://${config.host}:${config.port}/${req.file.destination}${req.file.filename}`
			: `no avatar`
		res.json({
			token: jwt.sign({ _id: user._id, email: user.email }, config.jwtSecret),
			avatarLink
		})
	}
}

module.exports.login = async (req, res) => {
	const {email, password} = req.body
	const user = await User.findOne({email})
	if (user){
		if (user.checkPassword(password)){
			res.json(omit(['password', '__v'], user.toObject()))
		} else {
			res.send('wrong email/password')
		}
	}else {
		res.send(`user ${email} does not exsits`)
	}
}