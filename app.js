var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
/*
  Express version 4 and above requires extra middle-ware layer to handle POST request.
  This middle-ware is called as ‘bodyParser’.
  Install it by: npm install --save body-parser

*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//when user request the app from web browser, we will serve the HTML file.
app.get('/',function(req,res){
  res.sendfile("index.html");
});
//When user click on log-in button on HTML page we will POST request to Server and get the response.
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
