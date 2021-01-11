const { response } = require('express');
const express = require('express');
//const Joi = require('joi');
var fs = require("fs"); // module to operate filesysytem
const path = require('path');
const app = express();

var timeInMss = new Date().getTime();
//const mydate = '2021-01-09';
fs.appendFile('currentdate.txt', timeInMss, function(err) {
    if (err) throw err;
    console.log('Saved!');
});


/*var pathObj = path.parse(__filename);
console.log(pathObj);*/




app.get("/", (req, res) => {
    fs.readdir('./', function(err, files) {
        if (err) console.log('Error', err);
        else console.log("Result", files);
        res.send(files)
    })


})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port} .....`));