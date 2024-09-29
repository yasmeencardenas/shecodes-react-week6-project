import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/yasmeencardenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yasmeen Trisa Cardenas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yasmeencardenas/shecodes-react-week6-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://lustrous-swan-b71f33.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}