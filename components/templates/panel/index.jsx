import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../wrapper";
import { PanelStyle } from "./panelStyle.js";

const useStyles = makeStyles(PanelStyle);

export default function Panel(props) {
  const classes = useStyles();
  let { left, right, style = {}, classProp = {}, containerProps = {} } =
    props || {};

  return (
    <Wrapper
      style={{ ...style }}
      className={`${classes.panel} ${classProp.wrapper}`}
      {...containerProps}
    >
      <Wrapper className={classes.panelText}>{left}</Wrapper>
      <Wrapper>{right}</Wrapper>
    </Wrapper>
  );
}
