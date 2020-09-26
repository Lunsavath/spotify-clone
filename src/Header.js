import React from "react";
import classes from "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <SearchIcon />
        <input
          placeholder="Search for artists,songs, or podcasts"
          type="text"
        />
      </div>
      <div className={classes.header_right}>
        <Avatar src={user?.images[0]?.url} alt="AN" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
