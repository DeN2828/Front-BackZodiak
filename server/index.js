const express = require("express");
   
const app = express();
   
// создаем парсер для данных в формате json
const jsonParser = express.json();
 
// настройка CORS
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
   next();  // передаем обработку запроса методу app.post("/postuser"...
 });
  
// обработчик по маршруту localhost:3000/postuser
app.post("/postuser", jsonParser, function (request, response) {
 
    // если не переданы данные, возвращаем ошибку
    // if(!request.body) return response.sendStatus(400);
     
    // получаем данные
    let date = request.body.name;
    console.log(date);
    // имитируем некоторую обработку данных, например, изменим значение userage
    console.log(date);
    let zodiac = detect_zodiac(Number(request.query.timestamp));
    
    
     
    // отправка данных обратно клиенту
    response.json({"date": zodiac});
});
  
app.listen(3001);

class Zodiac {
    constructor(dateBegin, dateEnd, name) {
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;
        this.name = name;
    }
}
let zodiacs = [
    new Zodiac(new Date(20, 12, 22), new Date(0, 1, 19), "Козерог"),
    new Zodiac(new Date(0, 1, 20), new Date(0, 2, 18), "Водолей"),
    new Zodiac(new Date(0, 2, 19), new Date(0, 3, 20), "Рыбы"),
    new Zodiac(new Date(0, 3, 21), new Date(0, 4, 19), "Овен"),
    new Zodiac(new Date(0, 4, 20), new Date(0, 5, 20), "Телец"),
    new Zodiac(new Date(0, 5, 21), new Date(0, 6, 20), "Близнецы"),
    new Zodiac(new Date(0, 6, 21), new Date(0, 7, 22), "Рак"),
    new Zodiac(new Date(0, 7, 23), new Date(0, 8, 22), "Лев"),
    new Zodiac(new Date(0, 8, 23), new Date(0, 9, 22), "Дева"),
    new Zodiac(new Date(0, 9, 23), new Date(0, 10, 22), "Весы"),
    new Zodiac(new Date(0, 10, 23), new Date(0, 11, 21), "Скорпион"),
    new Zodiac(new Date(0, 11, 22), new Date(0, 12, 21), "Стрелец"),
];
function detect_zodiac(timestamp) {
    // let date = new Date(2003, 7, 15);
    let date = new Date(Number(timestamp));
    console.log(date, date.valueOf());
    zodiacs.forEach(x => {
        x.dateBegin.setYear(date.getFullYear());
        x.dateEnd.setYear(date.getFullYear());
    });
    return zodiacs.filter(x => x.dateBegin <= date && x.dateEnd >= date)[0].name;
}