import Player from "../components/Player.jsx";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistsArray } from "../assets/database/artists.js";

const Song = () => {
  //const songId = useParams().id
  //console.log(songId);

  const { id } = useParams();
  //quando clica para aparecer o player da musica vai ser enviado pelo paramentro url o id dessa musica clicada
  //procurar dentro da array de todas as musicas aquela musica com o id params da url
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj, index) => currentSongObj._id === id
  )[0];

  //console.log(songObj)

  // depois de achado a musica pegar outras informações do artista dessa musica
  const artistObj = artistsArray.filter(
    (currentArtist) => currentArtist.name === artist
  )[0];

  // console.log("Song - Artista");
  // console.log(artistObj);
  // console.log("Song - audio");
  // console.log(audio)

  // quero pegar todas as musicas deste artista
  const songsArryFromArtist = songsArray.filter(
    (currentSong, index) => currentSong.artist === artist
  );

  // console.log(songsArryFromArtist)

  /*
  currentSong.artist === artist  , estou filtrando somente aquelas musicas que tiver o nome do artista igual 
  ao artista dessa musica desse id nesta pagina  
*/

  //fiz toda essa correção para poder ter a posibilidade de sortear o (songsArryFromArtist[songsArryFromArtist.length - 1]) ultimo elemento deste array
  const random = Math.floor(Math.random() * songsArryFromArtist.length);
  const indexChosen =
    random === songsArryFromArtist.length ? random - 1 : random;
  const randomIdFromArtist = songsArryFromArtist[indexChosen]._id;

  const random2 = Math.floor(Math.random() * songsArryFromArtist.length);
  const indexChosen2 =
    random2 === songsArryFromArtist.length ? random2 - 1 : random2;
  const randomIdFromArtist2 = songsArryFromArtist[indexChosen2]._id;

  // console.log("Song")
  // console.log(randomIdFromArtist)
  // console.log(randomIdFromArtist2)

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`}>
            <img
              style={{ width: "100%", height: "75px" }}
              src={artistObj.image}
              alt={`Imagem do artista ${artistObj.name}`}
            />
          </Link>
        </div>
        <Player
          random={randomIdFromArtist}
          random2={randomIdFromArtist2}
          duration={duration}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>{" "}
          {/* este pedaço refere ao nome da musica*/}
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
