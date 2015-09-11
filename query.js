var express = require('express'),
    app = express()

app.get('/search', function(req, res, next) {
	res.send(req.query)
})

app.listen(process.argv[2])