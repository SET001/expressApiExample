const jwt = require('jsonwebtoken')
const User = require('./models/user')
const config = require('./config')
const {omit} = require('ramda')

module.exports.register = async (req, res) => {
	const {email, password} = req.body
	const user = await User.findOne({email})
	if (user){
		res.status(409).send(`User with email ${email} alriedy exist!`)
	}else {
		const avatarLink = req.file
		? `http://${config.host}:${config.port}/${req.file.destination}${req.file.filename}`
		: `no avatar`
		const token = jwt.sign({email}, config.jwtSecret)

		const user = new User({
			...req.body,
			avatarLink,
			token
		})
		await user.save()
		res.json({token,avatarLink})
	}
}

module.exports.login = async (req, res) => {
	const {email, password} = req.body
	const user = await User.findOne({email})
	if (user){
		if (user.checkPassword(password)){
			res.json(omit(['password', '__v'], user.toObject()))
		} else {
			res.status(409).send('wrong email/password')
		}
	}else {
		res.status(409).send(`user ${email} does not exsits`)
	}
}