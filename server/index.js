require('dotenv').config()
const { SERVER_PORT, DB_URL } = process.env

const express = require('express');
const massive = require('massive')
const dungeon_controller = require('./controller/dungeon_contoller');
const config = require('../config.js');

// TOP-LEVEL MIDDLE WARE

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`))
massive(DB_URL)
    .then(dbInstance => {
        app.set('db', dbInstance)
        app.listen(SERVER_PORT, () => {
            console.log(`Listening on port: ${SERVER_PORT}`);
        });
    })

// END POINTS

app.post('/api/dungeon', dungeon_controller.create);
app.get('/api/dungeon', dungeon_controller.read)
app.get('/api/dungeon/:name', dungeon_controller.readByName)
app.put('/api/dungeon/:id', dungeon_controller.update)
app.delete('/api/dungeon', dungeon_controller.delete)
