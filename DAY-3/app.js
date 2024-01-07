//DAY-3 Reading data from client side and create a pdf file and store the req data in that file.
const http=require('http');
const routes=require('./routes');
const server=http.createServer(routes);
server.listen('3000');