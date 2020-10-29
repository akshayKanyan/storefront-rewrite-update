export const PanelStyle = (theme) => {
  return {
    panel: {
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
