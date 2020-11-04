// export const ProductGridStyle = (theme) => {
//   return {
//     dummyButton: {
//       width: 143,
//       height: 43,
//       background: "#1CAE4C",
//       marginBottom: 77,
//       [theme.breakpoints.down("xs")]: {
//         marginBottom: 60,
//         width: "100%",
//       },
//     },
//     container: {},
//     cardContainerWithPadding: {
//       marginRight: 23,
//       [theme.breakpoints.down("xs")]: {
//         marginRight: 0,
//       },
//     },
//     cardContainer: {
//       maxWidth: "100%",
//       background: theme.customColors.fafafa,
//       minWidth: (theme.containerWidth.subContainerWidth - 2 * 23) / 3,
//       [theme.breakpoints.down("xs")]: {
//         flexDirection: "column",
//         minWidth: "100%",
//       },
//     },
//     productImageContainer: {
//       [theme.breakpoints.down("xs")]: {
//         display: "none",
//       },
//     },
//     productImageMobileContainer: {
//       display: "none",
//       [theme.breakpoints.down("xs")]: {
//         display: "flex",
//       },
//     },
//     productImage: {
//       objectFit: "cover",
//       width: "100%",
//       height: "100%",
//     },
//     textSection: {
//       //   justifyContent: "center",
//       //   alignItems: "center",
//       [theme.breakpoints.down("xs")]: {
//         justifyContent: "stretch",
//         alignItems: "stretch",
//       },
//     },
//     textWrapper: {
//       maxWidth: 411,
//       margin: "0px 26px",
//       [theme.breakpoints.down("xs")]: {
//         maxWidth: "100%",
//         margin: "0px 25px",
//       },
//     },
//     productTitle: {
//       marginBottom: 18,
//       marginTop: 78,
//     },
//     productDescription: {
//       marginBottom: 30,
//     },
//     productPrice: {
//       marginTop: 46.5,
//       marginBottom: 35,
//     },
//   };
// };

export const ProductGridStyle = (theme) => {
  return {
    dummyButton: {
      width: 143,
      height: 43,
      background: "#1CAE4C",
      marginBottom: 77,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 60,
        width: "100%",
      },
    },
    container: {},
    cardContainer: {
      maxWidth: "100%",
      background: theme.customColors.fafafa,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        minWidth: "100%",
      },
    },
    productImageContainer: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    productImageMobileContainer: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    productImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    textSection: {
      //   justifyContent: "center",
      //   alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "stretch",
        alignItems: "stretch",
      },
    },
    textWrapper: {
      maxWidth: 411,
      margin: "0px 26px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        margin: "0px 25px",
      },
    },
    productTitle: {
      marginBottom: 18,
      marginTop: 78,
    },
    productDescription: {
      marginBottom: 30,
    },
    productPrice: {
      marginTop: 46.5,
      marginBottom: 35,
    },
  };
};
