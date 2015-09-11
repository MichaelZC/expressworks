var express = require('express'),
	app = express(),
	crypto = require('crypto')

app.put('/message/:id', function (req, res, next) {
	var encrypted = crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex')
	res.end(encrypted)
})

app.listen(process.argv[2])