const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()

app.use(bodyParser.json());

// HTTP listener
app.listen(3000, function () {
  console.log('Listening on port 3000');
});