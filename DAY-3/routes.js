const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>My First site</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button>send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url==='/message' && method==='POST')
    {  
      //Event req.on('data',somefunction); used to take data from the server in the forms of chunk;
       const body=[];
       req.on('data',(chunk)=>{
        console.log(chunk);
         body.push(chunk);
       });
    
    //Added event listener 'end' to convert that chunck into message using 'Buffer' storage.
        req.on('end',()=>{
        const handleChunk=Buffer.concat(body).toString();
        const handleMessage=handleChunk.split("=")[1];
        fs.writeFileSync('Demo.pdf',handleMessage);
        res.statusCode='302';
        return res.end();
       })
    }
    
    //Default page.
    res.write('<html>');
    res.write('<head><title>My First site</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button>send</button></form></body>');
    res.write('</html>');
    return res.end();
};

module.exports=requestHandler;

