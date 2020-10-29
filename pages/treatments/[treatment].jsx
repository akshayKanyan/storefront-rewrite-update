import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  H1,
  H2,
  H3,
  P1,
  P2,
  P3,
  Sh,
} from "../../components/reusableComponents/typography";
import { Wrapper } from "../../components/reusableComponents/subComponents";
import axios from "axios";
import TreatmentPannel from "../../components/templates/Panel";
import { TreatmentStyle } from "./treatmentStyle.js";
export const getStaticProps = async (context) => {
  let productData = await axios
    .get(
      `https://3pupscript.globexcorp.net/wp-json/wp/v2/pages/?slug=hair-loss`
    )
    .then((_) => {
      let { data = [] } = _;
      console.log("abcd", data);
      let { ACF } = data[0] || {};
      return ACF || {};
    });

  return {
    revalidate: 10,
    props: {
      productData,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

const useStyles = makeStyles(TreatmentStyle);

export default function Treatment({ productData = {} }) {
  const classes = useStyles();

  let {
    panel: {
      panel_description = "",
      panel_sub_heading = "",
      panel_heading = "",
      panel_image: { url = "" } = {},
    } = {},
  } = productData;

  return (
    <Wrapper id="adssasa" col>
      <div className={classes.dummyHeight}>dummy header height</div>
      <TreatmentPannel
        style={{ maxHeight: 692 }}
        left={
          <div className={classes.TextWrapper}>
            <Sh className={classes.panel_sub_heading}>{panel_sub_heading}</Sh>
            <H2 className={classes.panel_heading}>{panel_heading}</H2>
            <P2>{panel_description}</P2>
            <div className={classes.dummyButton}>button</div>
          </div>
        }
        right={<img className={classes.panelImage} src={url} />}
      />
    </Wrapper>
  );
}
