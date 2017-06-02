'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// Process application/json
app.use(bodyParser.json())

// the index route
app.get('/', function (req, res){
	res.send('hello im a bot')
});

// fb verification
app.get('/webhook/', function (req,res){
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me'){
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

//spin up the server 
app.listen(app.get('port'), function(){
	console.log('running on port', app.get('port'))
})