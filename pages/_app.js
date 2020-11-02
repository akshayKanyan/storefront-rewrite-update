import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { materialTheme } from "../theme/materialTheme";
import { sCTheme } from "../theme/sCTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MaterialThemeProvider theme={materialTheme}>
      <ThemeProvider theme={sCTheme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default MyApp;
