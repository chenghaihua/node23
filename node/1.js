var http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write();
    res.end("start");
});
server.listen(3040,'localhost');