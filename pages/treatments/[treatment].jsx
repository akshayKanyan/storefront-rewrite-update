import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { H1, H2, H3, P1, P2, P3, Sh } from "../../components/typography";
import { Wrapper } from "../../components/templates/wrapper";
import axios from "axios";
import Pannel from "../../components/templates/panel";
import ProductGrid from "../../components/templates/productGrid";
import FeatureInfo from "../../components/templates/featureInfo";
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
  console.log("ssss", productData);
  let {
    panel: {
      panel_description = "",
      panel_sub_heading = "",
      panel_heading = "",
      panel_image: { url = "" } = {},
    } = {},
  } = productData || {};

  let Products = [{}];

  return (
    <Wrapper center col>
      <div className={classes.dummyHeader}>dummy header height</div>
      <Wrapper center container col>
        <Pannel
          containerProps={{ container: true }}
          classProp={{ wrapper: classes.topPanelWrapper }}
          left={<ContentArea productData={productData} classes={classes} />}
          right={<img className={classes.panelImage} src={url} />}
        />
        <H2 className={classes.treatmentsHeader}>Treatments For Hair Loss</H2>
        <ProductGrid data={Products} />
        <FeatureInfo data={{abc: "abc"}} />
      </Wrapper>
    </Wrapper>
  );
}

const ContentArea = ({ classes, productData }) => {
  let {
    panel: {
      panel_description = "",
      panel_sub_heading = "",
      panel_heading = "",
      panel_image: { url = "" } = {},
    } = {},
  } = productData;

  return (
    <Wrapper col className={classes.TextWrapper}>
      {panel_sub_heading ? (
        <Sh className={classes.panel_sub_heading}>{panel_sub_heading}</Sh>
      ) : null}
      <H2 className={classes.panel_heading}>{panel_heading}</H2>
      <P2 className={classes.pannel_description}>{panel_description}</P2>
      <div className={classes.dummyButton}>button</div>
    </Wrapper>
  );
};
