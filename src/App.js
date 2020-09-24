import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyled from "./Global.Styled";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
