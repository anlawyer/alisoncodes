import React, { Component } from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
`;

const Header = () => (
  <Wrapper>
    <Link to="/">
      <h1>ALISON LAWYER</h1>
    </Link>
    <Link to="/work">Work</Link>
    <Link to="/about">About me</Link>
  </Wrapper>
);

export default Header;
