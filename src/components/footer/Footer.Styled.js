import styled from "styled-components";

export const FooterWrapper = styled.div`
  .footer-mid {
    background-color: #242424;
    color: white;
    .container {
      display: flex;
      justify-content: space-between;
      ul {
        h2 {
          font-size: 19px;
          padding-bottom: 20px;
          color: #2cc4d2;
          border-bottom: 3px solid #2cc4d2;
        }
        padding: 0;
      }
    }
  }
  .get-in-touch {
    background-color: #92e1ea;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      font-size: 24px;
      color: #2b818c;
    }
  }
  .developed-by {
    background-color: black;
    color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`;
