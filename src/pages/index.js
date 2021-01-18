import React from "react";
import MainLayout from "../components/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <h3>Welcome to my website.</h3>
      <p>
        I'm a frontend developer living in Oakland, CA.{" "}
        <span role="img" aria-label="sunny emoji">
          ☀️
        </span>
      </p>

      <p>
        <span role="img" aria-label="woman with laptop emoji">
          👩‍💻
        </span>{" "}
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
    </MainLayout>
  );
}
