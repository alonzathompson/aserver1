const express = require('express');
const bodyParser = require('body-parser');
const port = (process.env.PORT || 3000);
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + '/public'));

//routes
const contactMe = require('./routes/contactMeRoutes/contact');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.use('/contact', contactMe);

app.listen(port, function(){
    console.log("working");
});

