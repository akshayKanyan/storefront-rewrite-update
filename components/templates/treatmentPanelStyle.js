export const TreatmentPanelStyle = (theme) => {
  return {
    panel: {
      height: 692,
      background: theme.customColors.fafafa,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    panelText: {
      justifyContent: "center",
      alignItems: "center",
    },
  };
};
