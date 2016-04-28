/**
 * Created by favor on 2016/4/6.
 */

function route(handle,pathname,res,req){
    console.log("About to route a request for "+ pathname);
    if(typeof handle[pathname]==='function'){
/*      handle[pathname](res,postData);*/
        handle[pathname](res,req);
    }else{
        console.log("No req handler found for"+pathname);
        res.writeHead(404,{"Content-Tyoe":"text/html"});
        res.write("404 NOT found");
        res.end();
    }
}

exports.route=route;