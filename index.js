var http = require("http");
var express = require("express");
var util = require("util");

var port = 5000;

var app = express();
app.set("port",(process.env.PORT || port));

app.use("/",function(request,response)		//app.use va sia per get che per post
{
	response.end("helloworld!");

});

app.listen(port,"localhost");