const http = require('http');
const https = require('https');
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

const PROD = false;
//const redirectHttps = require('redirect-https');

const lex = require('greenlock-express').create({
  server: PROD ? 'https://acme-v01.api.letsencrypt.org/directory' : 'staging',
 
  approveDomains: (opts, certs, cb) => {
    if (certs) {
      opts.domains = ['localhost']
    } else { 
      opts.email = 'akashnigam020@gmail.com'
      opts.agreeTos = true;
    }
    cb(null, { options: opts, certs: certs });
  }
});
const middlewareWrapper = lex.middleware;
const redirectHttps = require('redirect-https');

var httpServer = http.createServer(lex.middleware(redirectHttps()));
var httpsServer = https.createServer(lex.httpsOptions, middlewareWrapper(app));

httpServer.listen(80, function () {
  console.log("Node server up and running on port: " + httpServer.address().port);
});

httpsServer.listen(443, function () {
  console.log("Node server up and running on port: " + httpsServer.address().port);
});
