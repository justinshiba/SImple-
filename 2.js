var http=require('http');
var fs=require('fs');
var querystring=require('querystring');
var server=http.createServer(function(req,res){
  
    
    req.on('data',function(data){
      console.log(decodeURIComponent(data));   
      info=querystring.parse(decodeURIComponent(data));
      console.log(info);
      console.log(info.name);
      console.log(info.password);
       var result;
       
       res.setHeader("Content-Type","text/");
       res.setHeader("Access-Control-Allow-Origin","*");  
     
      if(info.name=="wang" && info.password=="123456")
           {result="Success.";
            res.write(result);}
       else if(info.name=="")
           {result="Please Enter Username.";
            res.write(result);}
       else if(info.password=="")
           {result="Please Enter Password.";
            res.write(result);}
       else {result="Error.";
            res.write(result);} 
       
       console.log(result);

    res.end();
    });
  
  
})

server.listen(1337,"127.0.0.1");
