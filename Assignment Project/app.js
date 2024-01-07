const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/users')
    {
        res.write('<html>');
        res.write('<head><title>Users Panel</title></head>');
        res.write('<body><h1>Welcome to Node.js</h1><ul><li>Pavan</li><li>Max</li><li>Elon</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user' && method==='POST')
    {
     let body=[];
      req.on('data',(chunk)=>{
      body.push(chunk);
      });
      req.on('end',()=>{
        const handleInput=Buffer.concat(body).toString();
        const handleInputData=handleInput.split("=")[1];
        console.log(handleInputData);
        res.statusCode=302;
        res.setHeader('Location','/users');
        res.end();
      });
      return;
    }
    
        
        res.write('<html>');
        res.write('<head><title>Users Panel</title></head>');
        res.write('<body><h1>Welcome to Node.js</h1><form action="/create-user" method="POST"><input type=text name="create-user"/><button>Send</button</form></body>');
        res.write('</html>');
        res.end();
})

server.listen('3000');
