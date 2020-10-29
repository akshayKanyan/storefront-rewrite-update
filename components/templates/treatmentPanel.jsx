import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../reusableComponents/subComponents";
import { TreatmentPanelStyle } from "./treatmentPanelStyle.js";

const useStyles = makeStyles(TreatmentPanelStyle);

export default function TreatmentPanel(props = {}) {
  const classes = useStyles();
  let { left, right } = props;

  return (
    <Wrapper className={classes.panel}>
      <Wrapper className={classes.panelText}>{left}</Wrapper>
      <Wrapper>{right}</Wrapper>
    </Wrapper>
  );
}
