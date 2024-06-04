import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Screen1 } from "./Screen1";

function openScreen1() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Screen1 />
    </React.StrictMode>
  );
}

export function HomePage() {
  return (
    <div className="HomePage">
      <h className="HomePageMainHeading">This is Home Page</h>
      <br />
      <br />
      <img className = "HomeImage" src = "https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small_2x/vector60-1781-01.jpg" />
      <br />
      <br />
      <button className = "Button2">View Account Details</button>
    </div>
  );
}
