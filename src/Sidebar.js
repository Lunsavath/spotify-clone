import React from "react";
import classes from "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className={classes.side_bar}>
      <img
        className={classes.sidebar_logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img>
      <SidebarOption Icon={HomeIcon} tittle="Home" />
      <SidebarOption Icon={SearchIcon} tittle="Search" />
      <SidebarOption Icon={LibraryMusicIcon} tittle="Your Library" />
      <br />
      <strong className={classes.sidebar_playlist}>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption tittle={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
