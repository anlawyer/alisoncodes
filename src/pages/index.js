import React from "react";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout>
      <h1>Hi, I'm Alison and this is my website.</h1>
      <p>
        I'm a frontend developer living in Oakland, CA.{" "}
        <span role="img" aria-label="sunny emoji">
          ☀️
        </span>
      </p>

      <p>
        {/* <span role="img" aria-label="woman with laptop emoji">
          👩‍💻
        </span>{" "} */}
        I work at a{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bentoforbusiness.com"
        >
          FinTech startup
        </a>{" "}
        called Bento for Business in San Francisco, and I spend much of my free
        time volunteering on civic tech projects for Code for America at the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://openoakland.org"
        >
          OpenOakland brigade.
        </a>
      </p>

      <h3>OpenOakland</h3>
      <p>
        In 2019, I was OpenOakland's Communications Lead and Steering Committee
        Chair. I lead our communication efforts which included publishing a
        monthly newsletter, maintaining our social media presence, and
        publicizing our community events, among other things. A developer at
        heart, in addition to the responsibility of owning the org's online
        presence during my tenure, I lead the effort to redesign and launch a
        new open-source{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/openoakland/openoakland.org"
        >
          website
        </a>{" "}
        for the group.
      </p>
      <p>
        I currently am project lead for the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opendisclosure.io"
        >
          Open Disclosure
        </a>{" "}
        project, a website that helps voters understand the role of money in
        their local politics.
      </p>

      <h3>Bento for Business</h3>
      <p>
        Bento is a financial operating platform focusing on providing value to
        small and medium business by giving owners control over their expenses.
        Day to day, I work on all frontend projects using React and Redux.
      </p>

      <h3>Background</h3>
      <p>
        I studied Cognitive Science at UC Berkeley, and did two software
        engineering bootcamps after graduating from Cal in 2017. I worked full
        time while studying part time to become a web developer and was hired by
        Bento in mid-2018.
      </p>

      <h3>I'm like other things too</h3>
      <p>
        I also enjoy rock climbing, city biking, traveling to other cities to
        ride their transit, and going outdoors when I can. When I'm not reading
        a Vonnegut book, I like to learn about humans, psychology, design, and
        civic technology.
      </p>
    </Layout>
  );
}
