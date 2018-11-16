const express = require('express');
const bodyParser = require('body-parser');
const dungeon_controller = require('./controller/dungeon_contoller')

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.post('/api/dungeon', dungeon_controller.create);

app.get('/api/dungeon', dungeon_controller.read)

app.put('/api/dungeon/:id', dungeon_controller.update)

app.delete('/api/dungeon/:id', dungeon_controller.delete)

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});