const express = require('express');
const bodyParser = require('body-parser');
const dungeon_controller = require('./controller/dungeon_contoller')
const config = require('../config.js')

// MIDDLE WARE
const app = express();

app.use(bodyParser.json());

// END POINTS
app.post('/api/dungeon', dungeon_controller.create);

app.get('/api/dungeon', dungeon_controller.read)

app.get('/api/dungeon/:name', dungeon_controller.readByName)

app.put('/api/dungeon/:id', dungeon_controller.update)

app.delete('/api/dungeon', dungeon_controller.delete)

// IT CAN HERE YOU
app.listen(config.port, () => {
    console.log(`The server is running on port: ${config.port}`);
});