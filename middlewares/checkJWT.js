const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next)=> {
	if (!req.headers.authorization){
		res.status(401).send('Missing auth token')
	}
	const token = req.headers.authorization.split('=').pop()
	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err){
			res.status(401).send(err.message)
		} else {
			req.user = decoded
			next()
		}
	});
}