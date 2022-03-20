import express from 'express';
import {myApp, PORT} from "./utils/client.js";
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

const app = express();

app.use(cors(corsOptions));


app.listen(PORT, () => {
    console.log(`Running this app on the port ${PORT}.`);
});

app.get('/get-last-events', (req, res) => {
    const ENG_PREMIER_LEAGUE_ID = 4328;

    myApp
        .get(`/eventspastleague.php?id=${ENG_PREMIER_LEAGUE_ID}`)
        .then(response => res.send(response.data))
        .catch(e => res.status(400).send({ error: e }));
});

app.post('/get-team-details', express.json(), (req, res) => {
    const { teamId } = req.body;

    myApp
        .get(`/lookupteam.php?id=${teamId}`)
        .then(response => res.send(response.data))
        .catch(e => res.status(400).send({ error: e }));
})