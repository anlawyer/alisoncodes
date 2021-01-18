import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: floralwhite;
    font-family: "Lato", sans-serif;
    a {
      color: slateblue;
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

const Content = styled.div`
  flex: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Header />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;
