//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
var cors = require('cors')

app.use(cors())

// Endpoint to Get a list of users
app.get('/', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    fs.readFile(__dirname + "/" + "countries.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})