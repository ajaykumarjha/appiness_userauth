// Appiness User Auth task 1

To run this project
after pulling the code from public repository,please go to project directory and install node packages using command npm install

To start the server
run command node server.js 
or
nodemon

Server is running on port 9000


Swagger documentation is enabled for Api test
After running server,Terminal will show a link for documentation
Please follow the link for api testing
Otherwise,follow below url.Replace your_ip by your system ip and hit this url on browser:-

http://your_ip:9000/documentation#/

API details:-

Signup Api
Endpoint:-users/signup
Method:-POST
Expected Payload:-

{
  "firstName": "abc",
  "lastName": "xyz",
  "email": "abc@xyz.com",
  "password": "QWas@!@",
  "mobileNumber": "0000000000",
  "DOB": "20/10/1995",
  "role": "user"
}

Note:-
=>First user will be always admin.
=>It will check for unique email Validation.
=>For some other validation Joi validation has been enabled.
=>After creating admin,client can add any other user with different role.
=>At the time of user creation,it will create user role too.And user id would be      linked with user roloe.

Thank You :)


