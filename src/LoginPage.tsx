import "./styles.css";
import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomePage } from "./HomePage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseSetup";
import { Screen1 } from "./Screen1";
import { AuthContext } from "./context/AuthContext";
import { AuthProvider } from "./provider/AuthProvider";
import { SuccessfullyLoggedIn } from "./SuccessfullyLoggedIn";

function openSuccessfullyLoggedIn() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <SuccessfullyLoggedIn />
    </React.StrictMode>
  );
}

export function LoginPage() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      openSuccessfullyLoggedIn();
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="LoginPage">
      <br />
      <br />
      <br />
      <b>
        <h className="LoginPageMainHeading">Login to your existing account</h>
      </b>
      <br />
      <br />
      <div className="InputArea1">
        <h>Email</h>
        <br />
        <br />
        <input ref={emailRef} className="Input"></input>
        <br />
        <br />
        <h>Password</h>
        <br />
        <br />
        <input ref={passwordRef} type="password" className="Input"></input>
        <br />
        <br />
      </div>
      <button onClick={signIn} className="Button">
        Login
      </button>
      <br />
      <br />
    </div>
  );
}
