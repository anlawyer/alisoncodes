import React, { Component } from "react";
import Layout from "../components/Layout";

class App extends Component {
  render() {
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
          I work at a{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bentoforbusiness.com"
          >
            FinTech startup
          </a>{" "}
          in San Francisco, and I spend my free time volunteering for Code for
          America at the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://openoakland.org"
          >
            OpenOakland brigade
          </a>{" "}
          where I lead the brigade's communication efforts, including a monthly
          newsletter and social media presence, and I redesigned and launched a
          new open-source{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/openoakland/openoakland.org"
          >
            website
          </a>{" "}
          for the organization this year.
        </p>
        <p>
          I also enjoy rock climbing, city biking, traveling to other cities to
          ride their transit, and going outdoors when I can.
        </p>
        <p>
          I studied Cognitive Science at UC Berkeley, and did two software
          engineering bootcamps after graduating from Cal in 2017. When I'm not
          reading a Vonnegut book, I like to learn about humans, psychology,
          design, and civic technology.
        </p>
      </Layout>
    );
  }
}

export default App;
