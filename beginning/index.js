/**
 * Created by favor on 2016/4/6.
 */

var server=require("./server");
var route=require("./route");
var reqHandlers=require("./reqHandlers");



var handle={};

handle["/"]=reqHandlers.start;
handle["/start"]=reqHandlers.start;
handle["/upload"]=reqHandlers.upload;
handle["/show"]=reqHandlers.show;

server.start(route.route,handle);