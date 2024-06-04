import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

function openHomePage() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
}

function showMenu() {
  menuDiv = document.getElementById("menuDiv");
  if (menuDiv.style.display == "none") {
    menuDiv.style.display = "flex";
  } else {
    menuDiv.style.display = "none";
  }
}

export function Screen1() {
  return (
    <div className="App">
      <br />
      <br />
      <img
        onClick={showMenu}
        src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
        className="MenuIcon"
      />
      <div className="MenuDiv" id="menuDiv">
        <ul>
          <li>Homepage</li>
          <li>Introduction</li>
          <li>Credits</li>
        </ul>
      </div>
      <br />
      <div className="Screen1Headings">
        <h>This app is currently under development. So please wait!</h>
      </div>
      <br />
      <br />
      <br />
      <img
        className="image1"
        src="https://t3.ftcdn.net/jpg/02/46/67/70/360_F_246677065_FY7a89FprqE1iKgPpEVSKDVOWMBTS2MX.jpg"
      />
      <br />
      <br />
      <br />
      <button onClick={openHomePage} className="Button">
        Go to Home Page
      </button>
    </div>
  );
}
