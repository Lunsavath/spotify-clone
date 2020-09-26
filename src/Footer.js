import React from "react";
import classes from "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_left}>
        <img className={classes.footer_songLogo} src="" alt="" />
        <div className={classes.footer_songInfo}>
          <h4>Bob Marley</h4>
          <p>Om nama </p>
        </div>
      </div>
      <div className={classes.footer_middle}>
        <ShuffleIcon className={classes.footer_green} />
        <SkipPreviousIcon className={classes.footer_icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          classname={classes.footer_icon}
        />
        <SkipNextIcon className={classes.footer_icon} />
        <RepeatIcon className={classes.footer_green} />
      </div>
      <div className={classes.footer_right}>
        <Grid container spacing={2}>
          <Grid>
            <PlaylistPlayIcon />
          </Grid>
          <Grid>
            <VolumeDownIcon />
          </Grid>
          <Grid xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
