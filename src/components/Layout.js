import React from "react";
import NavBar from "./navbar/NavBar";

const Layout = ({ children, showNavbar }) => {
  return (
    <div className="App">
      {showNavbar && <NavBar />}

      {children}
    </div>
  );
};

export default Layout;
