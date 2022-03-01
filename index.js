const express = require('express');

const port = 3000;

const bp = require('body-parser');

const app = express();

app.use(bp.json())

app.use(bp.urlencoded({ extended: true }))

require('./src/conexao/conexao');

const escolaRouter = require('./src/routes/escola.routes');

app.use("/escola",escolaRouter);

app.listen(port ,()=>{console.log("listening on " + port)});