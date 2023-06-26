import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <LandingPage />
      </StyledEngineProvider>
    </>
  );
}

export default App;
