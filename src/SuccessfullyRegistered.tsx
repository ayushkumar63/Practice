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

export function SuccessfullyRegistered() {
  return (
    <div className="SuccessfullyRegistered">
      <br />
      <br />
      <h className="SuccessfullyRegisteredMainHeading">
        Your account has successfully been created!
      </h>
      <br />
      <br />
      <button onClick={openScreen1} className="Button">
        Continue
      </button>
      <br />
      <br />
    </div>
  );
}
