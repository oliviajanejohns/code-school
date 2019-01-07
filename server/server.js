const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

app.use(bodyParser.json());
// app.use(cors());


app.post('api/dashboard/:id/', (req, res) => {
  console.log('Received request');
  fs.writeFile('mock-user.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('File written to JSON.json');
    res.send('File written to JSON.json')
  })
});

// ADD get user from system
app.get('/api/movies', function (req, res) {
  res.send('mock-user.json' + user.id);
});

// ADD a new user to the system
app.push('api/dashboard/:id/', function(req, res) {

});


// HTTP listener
app.listen(3000, function () {
  console.log('Listening on port 3000. Post a file to http://localhost:3000 to save to /JSON.json');
});