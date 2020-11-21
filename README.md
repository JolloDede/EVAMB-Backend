# EVAMB-Backend

* [X] create server folder
* [X] npm install express volleyball
* [X] setup index.js
* [X] Add get / route

* [X] Messages
  * [X] Add get /messages route
  * [X] Add Post /Messages route
  
* [ ] Auth
  * [ ]Add auth router
  * [ ] Create user with POST /auth/signup
    * [ ] validate required fields
    * [ ] Check if username is unique
    * [ ] hash password with bcrypt
    * [ ] insert into db
 * [ ] Login user with POST /auth/login
    * [ ] validate the user
    * [ ] check if username in db
    * [ ] compare password with hashed password in db
    * [ ] Create and sign a JWT
    * [ ] Respond with JWT

* [ ] Event
  * [ ] Add get /events route
  * [ ] Add Post /events route
  
* [ ] Maybe front-end
  * [ ] Visitors can only see the homepage
	  * [ ] checkTokenSetUser middleware
		  * [ ] get token from Authorization header
			  * [ ] if defined ---
				  * [ ] Verify the token with the token secret
				  * [ ] Set req.user to be the decoded verified payload
			  * [ ] else - move along
	  * [ ] isLoggedIn middleware
		  * [ ] if req.user is set - move along
		  * [ ] else - send an unauthorized error message
	  * [ ] redirect to login form
  * [ ] Logged in users can only see their page

