import React from "react";
import { Screen1 } from "./Screen1";
import ReactDOM from "react-dom/client";

function openScreen1() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Screen1 />
    </React.StrictMode>
  );
}

export function SuccessfullyLoggedIn() {
  return (
    <div className="SuccessfullyLoggedIn">
      <br />
      <br />
      <h className="SuccessfullyLoggedInMainHeading">
        You have successfully logged in!
      </h>
      <br />
      <br />
      <button onClick={openScreen1} className="Button3">
        Continue
      </button>
      <br />
      <br />
    </div>
  );
}
