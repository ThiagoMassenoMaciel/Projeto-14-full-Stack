// vai consumir api fazendo uma requisição : Fetch ou Axios
import axios from "axios";

//vai acessar o valor da variavel de ambient .env
//import "dotenv/config" // tem que apagar as variaveis de ambiente pois tava dando erro

//const NODE_ENV = process.env.NODE_ENV
// const {NODE_ENV} = process.env

// const URL = NODE_ENV === 'development' ? "http://localhost:3000/api": "/api"

const URL = "https://projeto-14-full-stack.onrender.com/api"

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;
//console.log(responseArtists.data);

