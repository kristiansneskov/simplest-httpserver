//Lets require/import the HTTP module
var http = require('http');
var httpDispatcher = require('httpdispatcher');
//
////Lets define a port we want to listen to
const PORT=8080; 
//
////We need a function which handles requests and send response
function handleRequest(request, response){
  try {
    console.log('Received request ' + request.method);
  } catch (err) {
    console.log(err);
  }
  response.end('...And like all my plans, its so simple an idiot could have devised it! ' + request.url);
}
//
//    //Create a server
  var server = http.createServer(handleRequest);
//
//    //Lets start our server
server.listen(PORT, function(){
//        //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
