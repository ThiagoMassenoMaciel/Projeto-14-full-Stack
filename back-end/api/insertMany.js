// inserir dados no banco de dados não relacional apartir da array JAVASCRIPT que esta no frontend
import { artistsArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

// trocar o _id que escolhi quando montei a array de objetos pelo novo id que vai ser gerado automaticamente pelo banco de dados
const newArtistsArray = artistsArray.map((currentArtistObj => {
  const newArtistObj = {...currentArtistObj}
  delete newArtistObj._id

  return newArtistObj
}))

const newSongsArray = songsArray.map((currentSongObj => {
  const newSongObj = {...currentSongObj} // copiado as propriedades deste objeto para outra variável
  delete newSongObj._id

  return newSongObj
}))

// uma promessa de que vai pegar todos objetos da array e inserir dentro da "tabela" songs ou "tabela" artists
const responseSongs = await db.collection('songs').insertMany(newSongsArray) 
const responseArtists = await db.collection('artists').insertMany(newArtistsArray) 

console.log(responseSongs)
console.log(responseArtists)

//console.log(newArtistsArray)
//console.log(newSongsArray)
//console.log(songsArray)
