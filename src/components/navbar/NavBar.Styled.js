import styled from "styled-components";

export const NavBarWrapper = styled.div`
  .icons {
    margin: 0 10px;
  }
  .navbar-top {
    flex-direction: row;
    background-color: #2ac4d5;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .navbar-mid {
    .container-mid {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }
    .verticalLine {
      border-left: 2px solid black;
      height: 18px;
      margin: 0 10px;
    }
  }
  .menu {
    background-color: #cbf7fc;
    height: 50px;
    .menu-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
