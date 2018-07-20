module.exports = {
	type: 'object',
	required: ['email', 'password'],
  properties: {
    email: {type: 'string', format: 'email'},
		password: {type: 'string', minLength: 6},
		name: {type: 'string'}
	}
};