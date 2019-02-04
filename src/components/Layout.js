import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

const Content = styled.div`
  flex: 1;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    );
  }
}

export default Layout;
