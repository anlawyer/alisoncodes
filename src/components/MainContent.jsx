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
      I'm a student at Columbia University in New York City.{" "}
      <span role="img" aria-label="sunny emoji">
        ☀️
      </span>
    </p>

    <SectionTitle>Former software developer, aspiring ecologist</SectionTitle>
    <p>
      I'm currently a student at Columbia University completing the Ecology,
      Evolution and Environmental Biology post-baccalaureate prorgram. I'm
      hoping to go into a Masters or PhD program focusing on an area of
      environmental science after finishing the program at Columbia.
    </p>
    <SectionTitle>Background</SectionTitle>
    <p>
      After I graduated from{" "}
      <Link href="https://www.berkeley.edu">UC Berkeley</Link> with a BA in{" "}
      <Link href="https://cogsci.berkeley.edu">Cognitive Science</Link> in 2017,
      I completed two software engineering bootcamps before being hired by Bento
      for Business, a FinTech startup, in 2018. After the company was acquired
      by U.S. Bank, I worked for the bank for 3 years where I was promoted to
      Software Engineering Manager and helped grow our engineering organization
      5x the size it was when we were a startup.
    </p>
    <p>
      I lived in Washington, DC and Alexandria, VA for a few years where I
      joined the Weed Warriors program from the National Parks Service. We met
      bi-monthly to remove invasive plant species from the local National Parks.
    </p>
    <p>
      I also lived in Oakland, CA for a while, and while there I volunteered for{" "}
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

    <LinkContainer>
      <Link href="https://www.linkedin.com/in/alisonlawyer/">
        Find more details on LinkedIn
      </Link>
    </LinkContainer>

    <SectionTitle>Et cetera</SectionTitle>
    <p>
      When I'm not reading a sci-fi book, I like to learn about humans,
      psychology, design, and science. I also love traveling and spending time
      outdoors, including hiking, biking, camping, and rock climbing. I have a
      goal to visit every National Park in the US some day.
    </p>
  </Content>
);

export default MainContent;
