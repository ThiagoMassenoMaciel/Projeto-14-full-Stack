import {MongoClient} from 'mongodb'// estou importando uma classe e devo passar pelo parametro URI e
//senha @ se torna formatado para ser     %40
const URI = "mongodb+srv://thiagomasseno3:thiagomasseno3%401@cluster0.2jukc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotify"); // colocando todo banco dentro da variavel
/* promisse primeiro vai procurar no banco, pegou a collection de nome songs get todas propriedades dessa collection e tratou os dados para retornar uma array de objetos */
//const songsCollection = await db.collection('songs').find({}).toArray(); 
//console.log(songsCollection)//isso aqui vai aparecer no terminal pois este arquivo foi executado no terminal

//toda vida que for usar await precisa usar async na function