import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../wrapper";
import { ProductGridStyle } from "./productGridStyle.js";

const useStyles = makeStyles(ProductGridStyle);

export default function Panel(props) {
  const classes = useStyles();
  let { data = [], classProp = {}, containerProps = {} } = props || {};
  if (data.length === 1) {
    return (
      <Wrapper
        className={`${classes.container} ${classProp.singleContainer}`}
        subContainer
        {...containerProps}
      >
        
      </Wrapper>
    );
  }
  return (
    <Wrapper
      className={`${classes.container} ${classProp.container}`}
    ></Wrapper>
  );
}
