var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist',  // required, the root of the server 
    port: 8080
})
server.start(function () {
    console.log('Server listening to', server.port);
  });