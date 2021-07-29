import React, { Component } from "react";

import Head from "../components/Head";
import MainContent from "../components/MainContent";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: midnightblue;
    background-color: mintcream;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin: 1rem;
    a {
      color: orangered;
    }
    a:hover {
      background-color: peachpuff;
    }
  }
`;

const MainContainer = styled.div`
  margin: 1rem auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Head />
        <MainContainer>
          <MainContent />
        </MainContainer>
      </>
    );
  }
}

export default App;
