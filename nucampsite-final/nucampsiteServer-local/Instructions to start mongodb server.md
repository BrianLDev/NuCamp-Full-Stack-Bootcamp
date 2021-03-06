# INSTRUCTIONS TO START MONGODB SERVER

- These instructions/notes for my own future reference.  The folders below are the ones I've set up on my MBP.
- mongodb should already be installed and set up (I used homebrew for mac).  If not, search the web for set up instructions.

## LAUNCH MONGODB SERVER
1. open a new terminal / console window
2. cd to the mongodb folder:
/Users/Brian/Dropbox/Programming/Courses/Web Dev/NuCamp-Full-Stack-Web-Bootcamp/nucampsite-final/nucampsiteServer-local/mongod
3. run the following command
mongod --dbpath=data
4. It will launch on the default port 27017

## LAUNCH THE NODE SERVER
1. open a new terminal / console window
2. cd to the nucampsiteServer-local folder (or whatever server you want to connect to the database)
/Users/Brian/Dropbox/Programming/Courses/Web Dev/NuCamp-Full-Stack-Web-Bootcamp/nucampsite-final/nucampsiteServer-local
3. run `npm start`
4. the site will launch to `localhost:3000`.  Use that url to access it from any web browser or to test requests with Postman
Note - later in the course when the secure site is created, it will launch to `https://localhost:3443` instead

## LAUNCH THE FRONT END
1. open a new terminal / console window
2. cd to the nucampsiteClient-local folder
/Users/Brian/Dropbox/Programming/Courses/Web Dev/NuCamp-Full-Stack-Web-Bootcamp/nucampsite-final/nucampsiteClient-local
3. run `yarn start`

## TO TEST WITHIN POSTMAN:
1. Either a) Launch the postman agent and go to postman.com, or b) launch the desktop app
2. Go to your postman workspace and open a new window next to overview
3. test a simple GET request to `localhost:3000` and check the preview in the bottom section.  
4. Assuming that works as expected and shows the index or app.js, then you're connected and can run any further tests as needed
