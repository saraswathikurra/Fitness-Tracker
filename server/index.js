const express = require('express');
const gameController = require('./controllers/game');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;


const userController = require('./controllers/usercontroller');
const exerciseController = require('./controllers/exercisecontroller');
const dietController = require('./controllers/dietcontroller');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('This class is awesome!'))
    .use('/game', gameController)
    .use('/user', userController)
    .use('/exercise', exerciseController)
    .use('/diet', dietController)
    .use((err, req, res, next) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    });

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));