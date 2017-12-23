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
})

var server = app.listen(8443, function () {
  console.log("Node server up and running on port: " + server.address().port);
})