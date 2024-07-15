import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-image: linear-gradient(to top left, #0d51c3e0, #33782dc9);
  padding: 16px 4%;
  width: 100%;
  text-align: center;
  margin-top: auto; /* This ensures the footer stays at the bottom */

  & > span {
    color: #fff;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;
