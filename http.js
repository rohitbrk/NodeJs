// the built-in http module in nodejs can be used to transfer data over http protocol

const http = require('http')


http.createServer((req, res) => {
  
  // sends 'Hello World!' to the client who hits the API
  if(req.url === '/'){
  res.write('Hello World!'); 
  res.end(); 
  }

  // sends  'You are on admin route' to the client who hits the API
  if(req.url === '/admin'){
  res.write('You are on admin route'); 
  res.end(); 
  }

}).listen(8080);


