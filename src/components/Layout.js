import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Link from "./Link";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: midnightblue;
    background-color: mintcream;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    a {
      color: orangered;
    }
    a:hover {
      background-color: peachpuff;
    }
  }
`;

const Container = styled.div`
  margin: 1rem auto;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

const Content = styled.div`
  flex: 1;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Layout = () => (
  <>
    <GlobalStyle />
    <Head />
    <Container>
      <Header />
      <Content>
        <h1>Hi, I'm Alison.</h1>

        <p>
          I'm a frontend web developer living in Washington, DC.{" "}
          <span role="img" aria-label="sunny emoji">
            ☀️
          </span>
        </p>

        <h3>Coding by day, and sometimes by night</h3>
        <p>
          I currently work remotely for{" "}
          <Link href="https://bentoforbusiness.com">Bento for Business</Link>, a
          FinTech startup based in San Francisco/Chicago, building the web and
          mobile interfaces of our business expense management platform.
        </p>
        <p>
          While I lived in Oakland, CA, I volunteered for{" "}
          <Link href="https://openoakland.org">OpenOakland</Link> (a Code for
          America <Link href="https://brigade.codeforamerica.org">brigade</Link>
          ). I was on the steering committee for the year of 2019 where I lead
          the effort to modernize and open-source the{" "}
          <Link href="https://openoakland.org">organization's website</Link> in
          addition to running the org's internal and external communications.
          Before and after being part of the leadership team, I helped lead the{" "}
          <Link href="https://www.opendisclosure.io">Open Disclosure</Link>{" "}
          project, a website for local campaign finance visualization, in
          addition to being a code contributor for the site as well.
        </p>

        <FooterContainer>
          <Link href="https://github.com/anlawyer">See my code on GitHub</Link>
          <Link href="https://github.com/anlawyer">Here's my resume</Link>
        </FooterContainer>

        <h3>Education</h3>
        <p>
          After I graduated with a BA in{" "}
          <Link href="https://cogsci.berkeley.edu">Cognitive Science</Link> from{" "}
          <Link href="https://www.berkeley.edu">UC Berkeley</Link> in 2017, I
          completed two software engineering bootcamps before being hired by
          Bento in 2018.
        </p>

        <FooterContainer>
          <Link href="https://www.linkedin.com/in/alisonlawyer/">
            More details on LinkedIn
          </Link>
        </FooterContainer>

        <h3>Et cetera</h3>
        <p>
          When I'm not reading a sci-fi book, I like to learn about humans,
          psychology, design, and civic technology. I also love to travel and
          spend time outdoors, including hiking, biking, camping, and rock
          climbing. I have a goal to visit every National Park in the US some
          day.
        </p>
      </Content>
    </Container>
  </>
);

export default Layout;
