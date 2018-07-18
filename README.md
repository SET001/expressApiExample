# expressApiExample
An example app demonstrating express.js API implementation with basic auth

path | method | content/type | params | response
-----|--------|--------------|--------|---------
register | POST | form-data | email: string, required <br> password: string, required<br>avatar: file, optional<br>name: string, optional - some name | `{_id, name, email}`
login | POST | application/json | email : string, required  <br> password: string, required | `{token, avatarLink}`
notifications | POST | application/json | usernames: array of strings, requried - github usernames<br> message: string, required - message to send | example: sending emails to blahblah@gmail.com

Example instance of this app available at 176.107.176.108:8080
