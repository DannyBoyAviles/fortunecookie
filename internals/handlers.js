var fortune = require("./fortune");
//creando el handler
//getfortune
var _crackTheCookie = function(req,res){
    console.log("> Cookie crash requested...".info);
    fortune.getFortune(function(fortunePaperObj){
        //preparando encabezados para contestar con json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        //respondiendo con el objeto
        res.end(JSON.stringify(fortunePaperObject));
    });
};

var _getAuthor = function(req, res){
    console.log("> Se solicito Author");
    res.end("Daniel aviles");
}

//Creando Objeto manejador
var handlers = {};

//registrando manejadores en el objeto manejador
handlers["/crackthecookie"] = _crackTheCookie;
handlers["/getauthor"] = _getAuthor;

/exportando objeto manejador
module.exports = handlers;