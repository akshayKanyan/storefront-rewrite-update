export const TreatmentStyle = (theme) => {
  return {
    dummyHeader: {
      height: 55 + 35,
      minHeight: 55 + 35,
      background: "#193630",
      color: "white",
      width: "100%"
    },
    dummyButton: {
      width: 197,
      height: 43,
      background: "#1CAE4C",
      marginBottom: 201,
      marginTop: 30,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 60,
        width: "100%"
      },
    },
    panelImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    TextWrapper: {
      maxWidth: "69%",
      paddingLeft: 120,
      paddingTop: 201,
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 45,
      },
    },
    panel_sub_heading: {
      marginBottom: 20,
      marginTop: 45,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 16,
        marginTop: 0,
      },
    },
    panel_heading: {
      marginBottom: 25,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 16,
        fontSize: 24,
      },
    },
    pannel_description: {
      minHeight: 100,
      [theme.breakpoints.down("xs")]: {
        minHeight: "auto",
        marginBottom: 35,
        fontSize: 14,
      },
    },
    topPanelWrapper: {
      maxHeight: 632,
      [theme.breakpoints.down("xs")]: {
        maxHeight: "initial",
      },
    },
    treatmentsHeader:{
      marginTop: 100,
      marginBottom: 50,
      textAlign:"center",
      [theme.breakpoints.down("xs")]: {
        marginTop: 60,
        maxWidth: 244
      },
    }
  };
};
