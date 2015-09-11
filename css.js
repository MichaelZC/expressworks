var express = require('express'),
	app = express(),
	stylus = require('stylus'),
	directory = process.argv[3]

app.use(express.static(directory))
app.use(stylus.middleware(directory))

app.listen(process.argv[2])