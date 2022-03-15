import express from 'express';
import {myApp, PORT} from "./utils/client.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Running this app on the port ${PORT}.`);
});

app.get('/get-last-events', (req, res) => {
    const ENG_PREMIER_LEAGUE_ID = 4328;

    myApp
        .get(`/eventspastleague.php?id=${ENG_PREMIER_LEAGUE_ID}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
});
