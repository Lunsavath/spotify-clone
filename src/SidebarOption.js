import React from "react";
import classes from "./SidebarOption.css";

function SidebarOption({ tittle, Icon }) {
  return (
    <div className={classes.sidebarOption}>
      {Icon && <Icon className={classes.sidebarOption_icon} />}
      {Icon ? <h4>{tittle}</h4> : <p>{tittle}</p>}
    </div>
  );
}

export default SidebarOption;
