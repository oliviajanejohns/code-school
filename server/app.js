const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/database';

const User = require('./model/user');

// Initialise our app variable
const app = express()

//Middleware for bodyparsing using json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Check User Already Exists
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
                  message: 'Login Failed',
              })
          }
      })
  });
})

// Add New User to Mongoose
app.post('/api/user/signUp', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })
        user.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

// HTTP listener
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

