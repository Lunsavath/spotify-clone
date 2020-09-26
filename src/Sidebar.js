import React from "react";
import classes from "./Sidebar.css";

function Sidebar() {
  return (
    <div className={classes.side_bar}>
      <img
        className={classes.sidebar_logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img>
    </div>
  );
}

export default Sidebar;
