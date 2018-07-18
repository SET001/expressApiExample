const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const upload = require('multer')({ dest: 'uploads/' })
const {validate, checkGWT} = require('./middlewares')
const {registerSchema, loginSchema, notificationsSchema} = require('./schemas')
const auth = require('./auth')
const notifications = require('./notifications')

mongoose.connect(
	`mongodb://${config.dbHost || 'localhost'}:${config.dbPort || 27017}/${config.dbName}`,
	{ useNewUrlParser: true }
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'))

app.post('/login',
	validate(loginSchema),
	auth.login
)

app.post('/register',
	upload.single('avatar'),
	validate(registerSchema),
	auth.register
)

app.post('/notifications', 
	checkGWT,
	validate(notificationsSchema),
	notifications.send
)

app.listen(config.port, () => {
  console.log(`${config.appName} listening on port ${config.port}!`)
})