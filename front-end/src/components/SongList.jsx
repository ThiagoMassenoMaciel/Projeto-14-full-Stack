import SongItem from "./SongItem.jsx";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  console.log(items);
  //let items = 5
  return (
    <div className="song-list">
      {
        songsArray
        .filter((currentSong, index) => index < items)
        .map((currentSONG, index) => (
          <SongItem {...currentSONG} key={index} index={index} />
        ))
      }

      <p onClick={()=>{ setItems(items + 5 ); /*console.log(items);*/}} 
         className="song-list__see-more"
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
