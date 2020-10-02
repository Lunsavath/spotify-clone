import React from "react";
import classes from "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className={classes.song_row}>
      <img
        className={classes.songrow_album}
        src={track.album.images[0].url}
        alt=""
      />
      <div className={classes.songrow_info}>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")}-{""}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
