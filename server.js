var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	console.log('url', req.url);
	var queryData = url.parse(req.url, true).query;
	res.writeHead(200, {'Content-Type':'application/json'});
	//res.writeHead(200, {'Content-Type':'application/json'});
	if (queryData.token) {
		var json = JSON.stringify({"status":"ok"});
		console.log('json', json);
		res.end(json);
	}else {
		var json = JSON.stringify({"status":"error"});
		console.log('json', json);
		res.end(json);
	}
}
).listen(9000, function(){
console.log('listen at port 9000');
});
