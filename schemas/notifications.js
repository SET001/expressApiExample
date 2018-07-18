module.exports = {
	type: 'object',
	required: ['usernames', 'message'],
  properties: {
    usernames: { type: 'array', items: { type: 'string' } },
		message: { type: 'string' },
	}
};