import React, { useState } from "react";
import { NavBarWrapper } from "./NavBar.Styled";
import { FaEnvelope, FaPhone, FaAngleDown } from "react-icons/fa";
import Container from "@material-ui/core/Container";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [firstMenu, setFirstMenu] = useState(null);
  return (
    <NavBarWrapper>
      <div className="navbar-top">
        <Container maxWidth="lg" className="container">
          <div className="container-top">
            <span>Accredited by NAAC</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaEnvelope className="icons" />
            <span>{`birparacollege@gmail.com`}</span>
            <FaPhone className="icons" />
            <span>{`(+91) 9647702808`}</span>
          </div>
        </Container>
      </div>
      <div className="navbar-mid">
        <Container maxWidth="lg" className="container-mid">
          <Link to="/">
            <img src="/logo/logo.png" alt="Birpara College" />
          </Link>
          <div>
            <Link to="#">
              <Button color="primary">online admission</Button>
            </Link>
            <span className="verticalLine" />
            <Link to="#">
              <Button color="primary">Login</Button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="menu">
        <Container maxWidth="lg" className="menu-container">
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Home
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={firstMenu}
              keepMounted
              open={Boolean(firstMenu)}
              onClose={() => setFirstMenu(null)}
            >
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFirstMenu(null);
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              About us
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Administration
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Academics
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Student&apos;s Zone
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Iqac
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Notice
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Library
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Distance Education
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setFirstMenu(e.currentTarget);
              }}
              style={{ height: "50px" }}
            >
              Contact Us
              <FaAngleDown style={{ margin: "3px" }} />
            </Button>
          </div>
        </Container>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
