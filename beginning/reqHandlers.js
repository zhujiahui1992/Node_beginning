/**
 * Created by favor on 2016/4/6.
 */
//var sleep=require("./util/sleep");
var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(res) {
    console.log("Request handler 'start' was called");
    var body = '<!DOCTYPE html>' +
        '<head lang="zh-CN">' +
        '<meta http-equiv="Content-Type" content="text/html;" charset="UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data"  method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="提交文件" />' +
        '</form>' +
        '</body>' +
        '</html>';

    //sleep.sleep(10000);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}

function upload(res, req) {
    console.log("Request handler 'upload' was called");
    // return "Hello upload";
    var form = new formidable.IncomingForm();
    form.uploadDir = "./tmp";
    console.log("开始处理图片");
    form.parse(req, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "./tmp/test.png");
        res.writeHead(200, {'Content-Type': "text/html;charset=utf-8"});
        res.write("收到以下图片:<br/>");
        res.write("<img src='/show' />");
        res.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;