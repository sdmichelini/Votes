var express = require('express');

var app = require('./app');

var server = app.listen(8080, function(){
	console.log('App Started');
});
