# vipra-CPM
 This is a Contact Manager Program built as a part of interview task

# Technologies Used
Node.js, Express.js, MongoDB, Mongoose, EJS and jQuery AJAX REST API.

# Installation in local
You need to have installed Node.js, NPM and MongoDB in your System

## To Install

`npm install`

## Run

`npm start` 

## Test

`./node_modules/.bin/mocha`

Code is Running on 
+ http://localhost:3000/

# REST API
 1. POST/api/contact/
    THis is the API used by the user to submit the input file to create the contacts, which have three fields to fill to add the contact like Name,Email,and Mobile number.

    Response:200 OK

    {
	"name":"john",
	"email":"john123@vipra.com",
	"mobile":"98760786543"
	}

 2. GET/api/contact/1
    This is the API used by the user to get the contacts.

 3. PUT/api/contact/<:id>
    This is the API used by the user to update the contact by specifying the object unique id.

    Response:200 OK "Updated contact successfully"
    Before:   
           {
	   "name":"john",
	   "email":"john123@vipra.com",
	   "mobile":"98760786543"
	  }
    After:
         {
	    "name":"john",
	    "email":"john101@vipra.com",
	    "mobile":"98760786543"
	  }      
   4. DELETE/api/contact/<:id>
      This is API used by the user to delete the existing contact.  

      Response:200 OK "Deleted contact successfully"   