export const ProductInfoStyle = (theme) => {
  const ProductInfoWrapper = {
    marginBottom: 9,
  };
  return {
    ProductInfoWrapper: { ...ProductInfoWrapper },
    ProductInfoWrapperLastChild: { ...ProductInfoWrapper, marginBottom: 0 },
    productInfoImageWrapper: {
      maxWidth: 18,
      marginRight: 13,
      [theme.breakpoints.down("xs")]: {
        maxWidth: 13,
      },
    },
    productInfoImage: {
      height: 18,
      width: 18,
      maxHeight: 18,
      maxWidth: 18,
      [theme.breakpoints.down("xs")]: {
        height: 13,
        width: 13,
        maxHeight: 13,
        maxWidth: 13,
      },
    },
  };
};
