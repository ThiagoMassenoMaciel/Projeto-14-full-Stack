// vai consumir api fazendo uma requisição : Fetch ou Axios
import axios from "axios";

const URL = "http://localhost:3000"

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;
//console.log(responseArtists.data);

