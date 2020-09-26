import React from "react";
import Body from "./Body";
import classes from "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className={classes.player}>
      <div className={classes.playerBody}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
