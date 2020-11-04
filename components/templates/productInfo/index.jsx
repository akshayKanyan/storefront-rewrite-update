import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../wrapper";
import { P2 } from "../../typography";
import { ProductInfoStyle } from "./productInfoStyles";

const useStyles = makeStyles(ProductInfoStyle);

const ProductInfo = (props) => {
  const classes = useStyles();
  const { lastChild } = props;
  return (
    <Wrapper
      noGrow
      className={`${
        lastChild
          ? classes.ProductInfoWrapperLastChild
          : classes.ProductInfoWrapper
      }`}
    >
      <Wrapper noGrow center className={classes.productInfoImageWrapper}>
        <img
          className={classes.productInfoImage}
          src={
            "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
          }
        />
      </Wrapper>
      <p2>{"For men aged 18 - 65"}</p2>
    </Wrapper>
  );
};

export default ProductInfo;
