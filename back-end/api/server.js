// API  Aplication Programing Interface
//comunicação padronizada estre dois ou mais elementos de uma aplicação web

// request POST GET PUT DELETE
// CRUD -  create , read , update , delete
import express from 'express'
import cors from "cors";

import { db } from './connect.js';

const app = express(); //estou trazendo tudo da aplicação para dentro de uma variável
const PORT = 3000;
//servidor fica esperando pedido de requisição
// recebe por parâmetro PORTA DE CONEXÃO
// se tiver tudo ok executa a função do segundo parâmetro

app.use(cors())

//dominio:porta de conexao
//localhost:3000

// é necessário ler as informações dos artistas e das musicas logo é feito apenas requisições apenas GET 
//ENdpoint é uma rota que pode ser acessada da API

//Se receber uma requisição GET no endpoint "/especificado" executar a callFunction
app.get("/", (request, response)=>{
  //o que vai retornar como resposta do servidor
  response.send("Olá Mundo, tudo bom")
})
app.get("/artists", async (request, response)=>{
  response.send(await db.collection('artists').find({}).toArray()) // fez uma promessa de que vai la no banco de dados , procurar pela collection especificada e vai fazer uma pesquisa para retornar todos os objetos da collection no formato JSON
})

app.get("/songs", async (request, response)=>{
  response.send(await db.collection('songs').find({}).toArray())
})

//so precisamos de dois endpoints "/artists" e "/songs"



app.listen(PORT , ()=>{
  console.log(`O servidor esta escutando na porta ${PORT}`)
})
