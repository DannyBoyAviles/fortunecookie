var fortunes = [
    "En todo tiempo ama al amigo",
    "hijo de Irving que nace torcido",
    "el matrimonio es para aquellos que temen dormir solos en la noche",
    "aveces perdiendo una batatta encuentras la forma de ganar la guerra"
    ];
    
    function getIntRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

module.exports= {
    "getFortune": function(cb){
        //Construyo un Objeto respuesta
        var selector = getIntRandomNumber(0,fortunes.length-1);
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};