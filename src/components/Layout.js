import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

import styled from "styled-components";

const Container = styled.div`
  margin: 1rem auto;
  max-width: 800px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-color: floralwhite;
  font-family: "Lora", serif;
  a {
    color: slateblue;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
