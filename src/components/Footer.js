import React, { Component } from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/anlawyer"
        >
          See my code on GitHub
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/alison_lawyer"
        >
          Sometimes I retweet things on Twitter
        </a>
      </FooterContainer>
    );
  }
}

export default Footer;
