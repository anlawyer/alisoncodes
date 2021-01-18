import React from "react";
import MainLayout from "../components/MainLayout";

export default function Work() {
  return (
    <MainLayout>
      <h1>Work</h1>
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
    </MainLayout>
  );
}
