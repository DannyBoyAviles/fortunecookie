var mime = require("mime");
var fs = require("fs");
//exportando la funcionalidad del servidor estatico

exports.serve = function(url, res){
    var filePath = './static' + url;
    console.log(`> Se Servira Archivo: ${filePath}`.data);
    //seleccionar mime
    var mimeType =mime.lookup(filePath);
    
    fs.readFile(filePath, 
        function(err,content){
        if(err){
            //hubo error
            res.writeHead(500,{
                'Content-Type': "text/html"});
                console.log('>error en la lectura de '.err + 'un archivo ln20 server'.err);
                res.end("<h1>Error Interno</h1>");
        }else{staticServer.serve(url, res);}
            //no hubo error
            res.writeHead(200,{'Content-Type':mimeType});
            
            res.end(content);
        }
    });
};