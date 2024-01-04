//DAY-2
/*TASK:-on the request the server should send the html response  with Input and  Button 
 fields and on clicking of button the url should be changed to another url and corresponding the .txt file should be created. */
 const http=require('http');
 const fs=require('fs');
 const server=http.createServer((req,res)=>{
  const url=req.url; //Getting request url from browser endpoint.
  const method=req.method; //Getting the http method from user endpoint.
  if(url==='/')
  {
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"/><button>click</button></body>');
    res.write('</html>');
    return res.end();
  }
  if(url==='/message' && method==='POST')
  {
    fs.writeFileSync('pavan.txt','Welcome to nodejs');
    res.statusCode=302;//setting the statuscode to 302.
    res.setHeader('location','/');
    return res.end()
  }
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js</h1></body>');
  res.write('</html>');
  return res.end();
 })

 server.listen(3000);

