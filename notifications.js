const octokit = require('@octokit/rest')()
const config = require('./config')

octokit.authenticate({
  type: 'basic',
  username: config.gitUsername,
  password: config.gitPassword
})

const resolveUsers = userNames =>
	Promise.all(userNames.map(username =>
		octokit.users.getForUser({username}).catch(e => {
			console.error(`>>>Username "${username}" does not exists on gitHub`)
		})
	))

module.exports.send = async (req, res) => {
	const users = await resolveUsers(req.body.usernames)
	const emails = users
		.map(userInfo=>userInfo && userInfo.data ? userInfo.data.email : null)
		.filter(email=>email)
	res.send(`sending emails to ${emails}`)
}