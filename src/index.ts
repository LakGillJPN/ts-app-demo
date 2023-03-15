import { constants } from 'buffer';
import express, {Express, Request, Response} from 'express';
//const express = require('express') - old js style
const app: Express = express();
const PORT = process.env.PORT || 3000;

//app.use(express.json());

app.listen(PORT, () => {
 console.log( `app is listening @ http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hi How are you')
});



//checkingU

//convert this to use typescript

//set up some npm scripts so that my code auto transplies