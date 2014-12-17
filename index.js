var restify = require('restify');

var server = restify.createServer();

server.get('/', function (req, res, next) {
    res.send({hello: 'World'});
    next();
});

server.get('/greet/:user', function (req, res, next) {
    res.send({hello: req.params.user});
    next();
});

server.listen(3000, function () {
    console.log('listening on 3000');
});