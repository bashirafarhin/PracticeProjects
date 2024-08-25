# Blog Website 

## The main aim of this project is to implement operations such as
* GET
* PUT
* POST
* PATCH
* DELETE
and to learn how Api works

If you want to have a look at my project you can visit here [LINK](https://blog-website-lrga.onrender.com/)
If you wish to run this website on your machine you can follow these steps
1. Download zip file from above
2. unzip and open it in your code editor
3. cd over to the project
4. run npm i to install all the npm package or dependencies
5. change the PORT number
  * In your index.js file replace process.env.port with 4000
  * In your server.js file replace process.env.port with 3000
  * In the server.js file replace process.env.API_BACKEND_URL with "http://localhost:4000"
7. run nodemon index.js in a new terminal , don't close the terminal where you are running your index.js file
   * This will will act as an API
   * This is the server which listens to our request made by the server.js file and sends back a response to the server.js file
8. run nodemon server.js
   * This is the server which will make request to the index.js file
9. open [http:localhost:3000](http:localhost:3000]) to see the website

![Screenshot 2024-07-21 173416](https://github.com/user-attachments/assets/374c3c83-0c8c-4e46-9df4-e994a43bf12f)
