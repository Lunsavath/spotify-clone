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
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
