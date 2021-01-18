import React, { Component } from "react";
import Layout from "../components/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <h1>Hi, I'm Alison.</h1>
        <p>
          I'm a frontend developer living in Washington, DC.{" "}
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
          based in San Francisco/Chicago.
        </p>

        <p>
          I studied Cognitive Science at UC Berkeley, and did two software
          engineering bootcamps after graduating in 2017. When I'm not
          reading a sci-fi book, I like to learn about humans, psychology,
          design, and civic technology.
        </p>
      </Layout>
    );
  }
}

export default App;
