export const TreatmentStyle = (theme) => {
  return {
    dummyHeight: {
      height: 55 + 35,
      minHeight: 55 + 35,
      background: "#193630",
      color: "white",
    },
    dummyButton: {
      width: 197,
      height: 43,
      background: "#1CAE4C",
      marginBottom: 30,
      marginTop: 25
    },
    panelImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    TextWrapper: {
      maxWidth: "69%",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "90%",
      },
    },
    panel_sub_heading: {
      marginBottom: 20,
      [theme.breakpoints.down("xs")]: {
        marginTop: 45,
        marginBottom: 16,
      },
    },
    panel_heading: {
      marginBottom: 25,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 16,
      },
    },
  };
};
