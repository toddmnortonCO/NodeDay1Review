const express = require('express');
const app = express();
const controller = require('./controller');

const baseURL = 'http://localhost:5050'

console.log(controller);

app.use(express.json());

app.get('/api/teams', controller.getTeams);
app.post('/api/teams', controller.addTeam);



const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

