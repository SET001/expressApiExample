# expressApiExample
An example app demonstrating express.js API implementation with basic auth

path | method | content/type | params
-----|--------|--------------|--------
register | POST | form-data | email: string, required <br> password: string, required<br>avatar: file, optional<br>name: string, optional - some name
login | POST | application/json | email : string, required  <br> password: string, required
notifications | POST | application/json | usernames: array of strings, requried - github usernames<br> message: string, required - message to send

Example instance of this app available at 176.107.176.108:8080
