import express from "express";
// import cors from 'cors';
// import pg from 'pg';
import { converCLT } from "./controllers/calculator.js";
var app = express(); //cria um servidor
var port2 = 4000;
//-------------------- postgreSQL
// const{Pool} = pg;
// const user = 'postgres';
// const password = 'coconut';
// const host = 'localhost';
// const port = 5432;
// const database = 'teste01';
// const connection = new Pool({
//     user,
//     password,
//     host,
//     port,
//     database
//   });
//   const query = connection.query('SELECT * FROM users;');
//   let id = 1;
//   const query2 = connection.query('SELECT * FROM users WHERE id= ($1);', [id]);
// query.then(result => {
//     console.log(result.rows);
// });
// query2.then(result => {
//     console.log(result.rows[0]);
// });
app.get('/calculator', converCLT);
//-------------------- postgreSQL
// app.use(cors());
app.get("/", function (req, res) {
    res.send("hello world"); // Manda como resposta o texto 'Hello World'
});
app.listen(port2, function () {
    console.log("Servidor rodando em http://localhost:".concat(port2));
});
