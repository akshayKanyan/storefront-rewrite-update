import { createMuiTheme } from "@material-ui/core/styles";
import { constCustomColors } from "./sCTheme";
export const materialTheme = createMuiTheme({
  customColors: {
    ...constCustomColors,
  },
});
