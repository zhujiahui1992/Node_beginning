/**
 * Created by favor on 2016/4/5.
 */
const http = require('http');
var url = require('url');



const hostname = '127.0.0.1';
const port = 1337;

function start(route, handle) {
    http.createServer(function (req, res) {
  //      var postData="";
        var pathname = url.parse(req.url).pathname;
        console.log("Request for" + pathname + "received.");
        route(handle, pathname, res, req);
       /* req.setEncoding("utf8");

        req.addListener("data",function(postDataChunk){
            postData+=postDataChunk;
            console.log("Received POST data chunk '"+postDataChunk +"'.");
        });

        req.addListener("end",function(){
            route(handle, pathname, res,postData);
        })*/
    }).listen(port, hostname, function () {
        console.log("server is running");
    });
}
//使服务器可以被调用
exports.start = start;