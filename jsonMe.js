var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path')

app.get('/books', function(req, res, next) {
	fs.readFile(process.argv[3], function (err, data) {
		if (err) {
			throw err
		} else {
			res.send(JSON.parse(data))
		}
	})
})

app.listen(process.argv[2])
