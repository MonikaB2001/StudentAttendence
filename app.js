const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();

// Define Path for express config
const publicDirPath = path.join(__dirname);
const viewPath = path.join(__dirname);
const partialPath = path.join(__dirname);

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

//user---
app.get('/', function (req, res) {
    res.render('student');
});

app.listen(5000, function () {
    console.log('The project is running in port 5000');
});