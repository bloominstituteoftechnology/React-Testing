Features

- User stories
  - scenarios

As a sales executive
I want to login to the system
so that I can see the sales report

Scenarios

given a valid username

- and an incorrect password
- and
  when the user tries to login
- and
  then the system should not allow the login
- and should display a message:
- and should return an HTTP status code 401
- and should record the attempt in the log database
