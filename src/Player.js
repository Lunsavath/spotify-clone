import React from "react";
import Body from "./Body";
import classes from "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className={classes.player}>
      <div className={classes.playerBody}>
        <Sidebar />
        <Body />
      </div>

      {/*footer*/}
    </div>
  );
}

export default Player;
