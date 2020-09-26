import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const Layout = ({ children, showNavbar }) => {
  return (
    <div className="App">
      {showNavbar && <NavBar />}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
