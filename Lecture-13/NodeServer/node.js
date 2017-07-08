/**
 * Created by aayusharora on 7/7/17.
 */

var http = require('http');

function requestHandler(req,res) {
    res.end("Request handler");
}

var server = http.createServer(requestHandler);

server.listen(5000, function() {

   console.log("Server is listening on port 5000");

});