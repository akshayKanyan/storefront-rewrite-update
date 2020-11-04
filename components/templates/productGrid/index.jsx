import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../wrapper";
import { H2, P2, H3 } from "../../typography";
import { ProductGridStyle } from "./productGridStyle.js";

const useStyles = makeStyles(ProductGridStyle);

// export default function Panel(props) {
//   const classes = useStyles();
//   let { data = [], classProp = {}, containerProps = {}, ProductInfo } =
//       props || {},
//     col = false;
//   if (data.length > 1) {
//     col = true;
//   }
//   return (
//     <Wrapper
//       subContainer
//       className={`${classes.container} ${classProp.container}`}
//     >
//       {data.map((_, index) => (
//         <Wrapper
//           key={index}
//           className={`${classes.cardContainer} ${classProp.cardContainer} ${
//             (index === 0 || index % 3 !== 0) && index !== data.length - 1
//               ? classes.cardContainerWithPadding
//               : ""
//           }`}
//           col={col}
//           {...containerProps}
//         >
//           <Wrapper
//             className={`${classes.productImageContainer} ${classProp.productImageContainer}`}
//           >
//             <img
//               className={`${classes.productImage} ${classProp.productImage}`}
//               src={
//                 "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
//               }
//             />
//           </Wrapper>
//           <Wrapper
//             className={`${classes.textSection} ${classProp.textSection}`}
//           >
//             <Wrapper
//               col
//               className={`${classes.textWrapper} ${classProp.textWrapper}`}
//             >
//               <H2
//                 className={`${classes.productTitle} ${classProp.productTitle}`}
//               >
//                 {"Finasteride"}
//               </H2>
//               <P2
//                 className={`${classes.productDescription} ${classProp.productDescription}`}
//               >
//                 {
//                   "A longstanding generic and one of the most commonly prescribed medications in the United States. Finasteride prevents genetic hair loss and encourages growth by blocking DHT, a testosterone-derived steroid that shrinks hair follicles."
//                 }
//               </P2>
//               <Wrapper
//                 className={`${classes.productImageMobileContainer} ${classProp.productImageMobileContainer}`}
//               >
//                 <img
//                   className={`${classes.productImage} ${classProp.productImage}`}
//                   src={
//                     "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
//                   }
//                 />
//               </Wrapper>
//               <ProductInfo data={data.productInfo} />
//               <ProductInfo data={data.productInfo} />
//               <ProductInfo lastChild data={data.productInfo} />
//               <H3
//                 className={`${classes.productPrice} ${classProp.productPrice}`}
//               >
//                 $72.00
//               </H3>
//               <div className={classes.dummyButton}>button</div>
//             </Wrapper>
//           </Wrapper>
//         </Wrapper>
//       ))}
//     </Wrapper>
//   );
// }

export default function Panel(props) {
  const classes = useStyles();
  let { data = [], classProp = {}, containerProps = {}, ProductInfo } =
      props || {},
    col = false;
  if (data.length > 1) {
    col = true;
  }
  return (
    <Wrapper
      grid={{
        "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))",
        "grid-auto-rows": "minmax(200px, auto)",
        "grid-gap": "1em",
      }}
      subContainer
      className={`${classes.container} ${classProp.container}`}
    >
      {data.map((_, index) => (
        <Wrapper
          grid={{
            "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))",
            "grid-auto-rows": "minmax(300px, auto)",
          }}
          key={index}
          className={`${classes.cardContainer} ${classProp.cardContainer}`}
          col={col}
          {...containerProps}
        >
          <Wrapper
            className={`${classes.productImageContainer} ${classProp.productImageContainer}`}
          >
            <img
              className={`${classes.productImage} ${classProp.productImage}`}
              src={
                "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
              }
            />
          </Wrapper>
          <Wrapper
            className={`${classes.textSection} ${classProp.textSection}`}
          >
            <Wrapper
              col
              className={`${classes.textWrapper} ${classProp.textWrapper}`}
            >
              <H2
                className={`${classes.productTitle} ${classProp.productTitle}`}
              >
                {"Finasteride"}
              </H2>
              <P2
                className={`${classes.productDescription} ${classProp.productDescription}`}
              >
                {
                  "A longstanding generic and one of the most commonly prescribed medications in the United States. Finasteride prevents genetic hair loss and encourages growth by blocking DHT, a testosterone-derived steroid that shrinks hair follicles."
                }
              </P2>
              <Wrapper
                className={`${classes.productImageMobileContainer} ${classProp.productImageMobileContainer}`}
              >
                <img
                  className={`${classes.productImage} ${classProp.productImage}`}
                  src={
                    "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg"
                  }
                />
              </Wrapper>
              <ProductInfo data={data.productInfo} />
              <ProductInfo data={data.productInfo} />
              <ProductInfo lastChild data={data.productInfo} />
              <H3
                className={`${classes.productPrice} ${classProp.productPrice}`}
              >
                $72.00
              </H3>
              <div className={classes.dummyButton}>button</div>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
}
