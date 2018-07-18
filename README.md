# expressApiExample
An example app demonstrating express.js API implementation with basic auth


POST /login
  content type: application/json
  params:
    email: string, required
	  password: string, required
    
POST /notifications
  content type: application/json
  params: 
    usernames: array of strings, requried - github usernames
	  message: string, required - message to send

POST /register
  content-type: form-data
  params:
    email: string, required
    password: string, required
    avatar: file, optional
    name: string, optional - some name

Example instance of this app available at 176.107.176.108:8080
