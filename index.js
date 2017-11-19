const bodyParser = require('body-parser');
const express = require("express");

const initHttpServer = () => {
    var app = express();
    app.use(bodyParser.json());

    // We POST
    app.post('/home', (req, res) => {
      res.send('thanks');
      console.log(req.body)
    });

    // We GET
    app.get('/', (req, res) => {
      res.send('got you');
      console.log(req.body)
    })
    
  app.listen(3001, () => console.log('Listening http on port: ' + 3001));
};

initHttpServer();