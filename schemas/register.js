module.exports = {
	type: 'object',
	required: ['email', 'password'],
  properties: {
    email: {type: 'string', format: 'email'},
		password: {type: 'string'},
		name: {type: 'string'}
	}
};