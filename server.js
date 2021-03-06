const http = require('http');
const https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(__dirname));

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akashnigam020@gmail.com',
    pass: 'Akash123!'
  }
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/privacy',function(req,res){
  res.sendFile(path.join(__dirname + '/privacy.html'));
});

app.post('/subscribe', function (req, res) {
	var email = req.body.email

	var mailOptions = {
	  from: 'akashnigam020@gmail.com',
	  to: 'akashnigam010@gmail.com',
	  subject: 'Indepublic - New Subscription',
	  text: 'New Subscription - ' + email
	};

	res.setHeader('Content-Type', 'application/json');
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    res.send(JSON.stringify({"status" : false }));
	  } else {
	    res.send(JSON.stringify({"status" : true }));
	  }
	});
});

app.post('/message', function (req, res) {
	var name = req.body.name;
	var phone = req.body.phone;
	var email = req.body.email
	var message = req.body.message;

	var body = 'Name : ' + name + ', Phone : ' + phone + ', Email : ' + email + ', Message : ' + message;

	var mailOptions = {
	  from: 'akashnigam020@gmail.com',
	  to: 'akashnigam010@gmail.com',
	  subject: 'Indepublic - New Message from ' + name,
	  text: body
	};

	res.setHeader('Content-Type', 'application/json');
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    res.send(JSON.stringify({"status" : false }));
	  } else {
	    res.send(JSON.stringify({"status" : true }));
	  }
	});
});

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.indepublic.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.indepublic.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/www.indepublic.com/chain.pem')
};

https.createServer(options, app).listen(8443, function(){
   console.log("Node server up and running on port: 8443");
});

http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(8080, function(){
    console.log("Node server up and running on port: 8080");
});
