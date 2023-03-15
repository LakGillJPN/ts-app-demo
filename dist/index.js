"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express') - old js style
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//app.use(express.json());
app.listen(PORT, () => {
    console.log(`app is listening @ http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hi How are you');
});
//checkingU
//convert this to use typescript
//set up some npm scripts so that my code auto transplies
