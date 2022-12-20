import React from "react";

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="title">
        <h1>Projects</h1>
        <a href="tel:+994775229026" className="contact">
          Contact me
        </a>
      </div>
      <div className="projects">
        <div>
          <a href="https://restcountry-aytan.netlify.app" target="_blank">
            <img src="../public/rest-countries.jpg" />
          </a>
          <p>Rest Country</p>
          <a
            href="https://github.com/aytankhaligli/rest-countries-react"
            target="_blank"
          >
            Code
          </a>
        </div>
        <div>
          <a href="https://todo-app-aytan.netlify.app" target="_blank">
            <img src="../public/todo.jpg" />
          </a>
          <p>Todo app</p>
          <a href="https://github.com/aytankhaligli/Todo-app" target="_blank">
            Code
          </a>
        </div>
        <div>
          <a href="https://calculator-app-aytan.netlify.app" target="_blank">
            <img src="../public/calculator.jpg" />
          </a>
          <p>Calculator app</p>
          <a
            href="https://github.com/aytankhaligli/Calculator-app"
            target="_blank"
          >
            Code
          </a>
        </div>
        <div>
          <a href="https://tips-calculator-app.netlify.app" target="_blank">
            <img src="../public/tip-calculator.jpg" />
          </a>
          <p>Tips-calculator app</p>
          <a
            href="https://github.com/aytankhaligli/Tip-calculator"
            target="_blank"
          >
            Code
          </a>
        </div>
        <div>
          <a
            href="https://advicegenerator-app-aytan.netlify.app"
            target="_blank"
          >
            <img src="../public/advice.jpg" />
          </a>
          <p>Advice-generator app</p>
          <a
            href="https://github.com/aytankhaligli/Advice-generator"
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
