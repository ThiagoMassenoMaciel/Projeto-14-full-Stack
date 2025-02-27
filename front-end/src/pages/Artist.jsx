import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import SongList from "../components/SongList.jsx";
import { artistsArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Artist = () => {
  // const {pathname} = useLocation()
  // console.log("Artist - useLocation() " + pathname)

  // const params = useParams()
  // console.log("Artist - useParams()")
  // console.log(params)

  //console.log(artistsArray.filter( (currentArtistObj,index)=> currentArtistObj._id === Number(id)))// so vai retornar um objeto que é o artista clicado
  //console.log(artistObj)
  //console.log(songsArray.filter( (currentSong,index) => currentSong.artist === artistObj.name) )// filtrar somente as musicas do artista clicado

  const { id } = useParams();

  const {name, banner} = artistsArray.filter(
    (currentArtistObj, index) => currentArtistObj._id === id
  )[0];

  const songsArryFromArtist = songsArray.filter(
    (currentSong, index) => currentSong.artist === name
  );

  //console.log(songsArryFromArtist)

//fiz toda essa correção para poder ter a posibilidade de sortear o (songsArryFromArtist[songsArryFromArtist.length - 1]) ultimo elemento deste array
  const random = Math.floor(Math.random()*(songsArryFromArtist.length ))
  const indexChosen = random === songsArryFromArtist.length ? (random - 1 ): random
  const randomIdFromArtist = songsArryFromArtist[indexChosen]._id

  //console.log(randomIdFromArtist)

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArryFromArtist} />

      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
