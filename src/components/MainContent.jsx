import React from "react";
import Link from "./Link";

import styled from "styled-components";

const Content = styled.div`
  flex: 1;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionTitle = styled.h3`
  margin-top: 36px;
  margin-bottom: -6px;
`;

const MainContent = () => (
  <Content>
    <h1>Hi, I'm Alison.</h1>

    <p>
      I'm a frontend web developer living in Washington, DC.{" "}
      <span role="img" aria-label="sunny emoji">
        ☀️
      </span>
    </p>

    <SectionTitle>Coding by day, and sometimes by night</SectionTitle>
    <p>
      I currently work remotely for{" "}
      <Link href="https://bentoforbusiness.com">Bento for Business</Link>, a
      FinTech startup based in San Francisco/Chicago, where I build the web and
      mobile interfaces of the business expense management platform with React
      and React Native.
    </p>
    <p>
      While I lived in Oakland, CA, I volunteered for{" "}
      <Link href="https://openoakland.org">OpenOakland</Link> (a Code for
      America <Link href="https://brigade.codeforamerica.org">brigade</Link>
      ). I was on the steering committee for the year of 2019 where I lead the
      effort to modernize and open-source the{" "}
      <Link href="https://openoakland.org">organization's website</Link> in
      addition to running the org's internal and external communications. Before
      and after being part of the leadership team, I helped lead the{" "}
      <Link href="https://www.opendisclosure.io">Open Disclosure</Link> project,
      a website for local campaign finance visualization, in addition to being a
      code contributor for the site throughout my time there.
    </p>

    <LinkContainer>
      <Link href="https://github.com/anlawyer">See my code on GitHub</Link>
    </LinkContainer>

    <SectionTitle>Education</SectionTitle>
    <p>
      After I graduated with a BA in{" "}
      <Link href="https://cogsci.berkeley.edu">Cognitive Science</Link> from{" "}
      <Link href="https://www.berkeley.edu">UC Berkeley</Link> in 2017, I
      completed two software engineering bootcamps before being hired by Bento
      in 2018.
    </p>

    <LinkContainer>
      <Link href="https://www.linkedin.com/in/alisonlawyer/">
        More details on LinkedIn
      </Link>
    </LinkContainer>

    <SectionTitle>Et cetera</SectionTitle>
    <p>
      When I'm not reading a sci-fi book, I like to learn about humans,
      psychology, design, and civic technology. I also love traveling and
      spending time outdoors, including hiking, biking, camping, and rock
      climbing. I have a goal to visit every National Park in the US some day.
    </p>
  </Content>
);

export default MainContent;
