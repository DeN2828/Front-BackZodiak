const express = require('express')
const cors = require('cors');
const app = express();
const port = 3001;

const corsOptions = {
    origin: 4200,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log('Listening on port', port);
});

app.get('/zodiac', (req: any, res: any) => {
    let zodiac = detect_zodiac(Number(req.query.timestamp));
    res.json({ result: zodiac });
})

class Zodiac {
    dateBegin: any;
    dateEnd: any;
    name: string

    public constructor(dateBegin: any, dateEnd: any, name: string) {
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;
        this.name = name;
    }
}
let zodiacs: Zodiac[] = [
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
]

function detect_zodiac(timestamp: any) {
    // let date = new Date(2003, 7, 15);
    let date = new Date(Number(timestamp));
    console.log(date, date.valueOf())

    zodiacs.forEach(x => {
        x.dateBegin.setYear(date.getFullYear())
        x.dateEnd.setYear(date.getFullYear())
    });

    return zodiacs.filter(x => x.dateBegin <= date && x.dateEnd >= date)[0].name;
}