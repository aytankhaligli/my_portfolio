import React from "react";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function Header() {
  return (
    <header>
      <p className="name">aytankhaligli</p>
      <div className="logo">
        <a href="https://github.com/aytankhaligli" target="_blank">
          <GithubLogo size={20} weight="fill" />
        </a>
        <a
          href="https://www.linkedin.com/in/aytan-khaligli-980579188/"
          target="_blank"
        >
          <LinkedinLogo size={20} weight="fill" />
        </a>
        <a href="https://twitter.com/aytenxaliqli" target="_blank">
          <TwitterLogo size={20} weight="fill" />
        </a>
      </div>
    </header>
  );
}
