const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/usersDatabase';

const User = require('./model/user');

// const config = require('../client/config/database');

// Initialise our app variable
const app = express()

//Middleware for bodyparsing using json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Invalid page");
})

app.post('/api/user/login', (req, res) => {
  mongoose.connect(url,{ useMongoClient: true }, function(err){
      if(err) throw err;
      User.find({
          username : req.body.username, password : req.body.password
      }, function(err, user){
          if(err) throw err;
          if(user.length === 1){  
              return res.status(200).json({
                  status: 'success',
                  data: user
              })
          } else {
              return res.status(200).json({
                  status: 'fail',
                  message: 'Login Failed'
              })
          }
           
      })
  });
})

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
// app.use(express.static(path.join(__dirname, 'public')));


// HTTP listener
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

