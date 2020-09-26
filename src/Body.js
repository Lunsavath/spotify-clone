import React from "react";
import classes from "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
    </div>
  );
}

export default Body;
