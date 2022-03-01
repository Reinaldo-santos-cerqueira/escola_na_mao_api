const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const connection = require('../conexao/conexao');

router.get("/",(req, res) => {

    connection.query("SELECT * FROM ESCOLA", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      }); 

});

router.get("/:id",(req, res) => {

    let id = req.params.id;

    connection.query("SELECT * FROM ESCOLA WHERE ID = "+ id, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      }); 
})

router.post("/",(req, res) => {

    console.log(req.body);
    
    const {nome,cnpj,email,senha,razaoSocial} = req.body;

    let dataCadastro = new Date();
    let mes = dataCadastro.getMonth() +1;
    let date = dataCadastro.getDate();
    let year = dataCadastro.getFullYear();
    console.log(year);


    connection.query("INSERT INTO ESCOLA (NOME,CNPJ,EMAIL,SENHA,DATA_CADASTRO,RAZAO_SOCIAL) VALUES('"+nome+"','"+cnpj+"','"+email+"','"+senha+"','"+dataCadastro+"','"+razaoSocial+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(res.json);
      }); 
})

module.exports = router;