//Importando dependencias
var http = require('http');
var fs =require('fs');
var mime = require('mime');

var staticServer = require("./internals/static-server");

//importando el ob configurador
var config = require('./config/config');

//Importando manejadores
var handlers = require("./internals/handlers");

//importando configuraciones
var IP = config.IP;
var PORT= config.PORT;

//Codigo del server

var server = http.createServer(function(req, res){
    var url = req.url;
    console.log(`> sirviendo: ${url}`.data)
    if(url === "/"){
        url = '/index.html'
    }
    //verificando si la url esta asociada a una accion que puede hacer el server
   
    if(typeof(handlers[url]) === "function"){
        //si existe una funcion en handlers llamada como el contenido de la "url"
        handlers[url](req, res);
    }else{
        //No encontro un manejador para la url solicitada por el usuario
        //se intentara servir de manera estatica
        staticServer.serve(url, res);
    }

//Generar la ruta real del archivo solicitado

    console.log(`> Recurso solicitado> ${url}`.data);
    
});
server.listen(PORT, IP, function(){
    console.log(`>Server corriendo en http://${IP}:${PORT}`.info);
});