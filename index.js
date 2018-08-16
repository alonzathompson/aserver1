const express = require('express');
const bodyParser = require('body-parser');
const conFig = require('./config');
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//routes
const contactMe = require('./routes/contactMeRoutes/contact');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req,res) {
   res.send('Hello');
});

app.use('/contact', contactMe);

app.listen(conFig.PORT, () => {
    console.log("working");
});

