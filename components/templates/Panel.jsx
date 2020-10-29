import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../reusableComponents/subComponents";
import { PanelStyle } from "./PanelStyle.js";

const useStyles = makeStyles(PanelStyle);

export default function Panel(props = {}) {
  const classes = useStyles();
  let { left, right, style = {} } = props;

  return (
    <Wrapper style={{...style}} className={classes.panel}>
      <Wrapper className={classes.panelText}>{left}</Wrapper>
      <Wrapper>{right}</Wrapper>
    </Wrapper>
  );
}
