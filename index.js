const express = require('express');
const NodeGeocoder = require('node-geocoder');
const bodyParser = require('body-parser');
const axios = require('axios');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('demo')
})

app.get('/data', (req, res) => {
    let points = [];
    fs.createReadStream('xe11.csv')
        .pipe(csv())
        .on('data', (data) => points.push(data))
        .on('end', () => {
            return res.json(points);
        });


})
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy trên http://localhost:${port}`);


});
