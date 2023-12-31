import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header1 from "../src/Pages/Header/Header1/Header1";

import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  //Don't forget to update the header with passing SetMode to his MainComponent

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // @ts-ignore

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header1 setMode={setMode} />
    </ThemeProvider>

  );
}

export default App;
