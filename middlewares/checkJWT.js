const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next)=> {
	const token = req.headers.authorization.split('=').pop()
	console.log(">>>", token)
	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err){
			res.status(401).send(err.message)
		} else {
			req.user = decoded
			next()
		}
	});
}