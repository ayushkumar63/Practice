import "./styles.css";
import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Screen1 } from "./Screen1";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { AuthProvider } from "./provider/AuthProvider";
import { auth } from "./firebaseSetup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SuccessfullyRegistered } from "./SuccessfullyRegistered";
import { Dropbox } from "dropbox";
import { saveAs } from "file-saver";
import { useState } from "react";
import { TextInput } from "react-native/types";

if (process.env.REACT_APP_USE_CRYPTO_POLYFILL) {
  // Use polyfill or handle the 'crypto' module as needed
  require("crypto-browserify");
}

function openSuccessfullyRegistered() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <SuccessfullyRegistered />
    </React.StrictMode>
  );
}

function openLoginPage() {
  const rootElement = document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <LoginPage />
    </React.StrictMode>
  );
}

export default function App() {
  function storeUserDetails() {
    var name = document.getElementById("name");
    var username = document.getElementById("username");
    var email = document.getElementById("email");

    var dbx = new Dropbox({
      accessToken:
        "sl.B2h7mRHZOzI4C2YV9QfwaPzNfDo6uZFs8s1NdqRSm62mBsXL9iLYzhI8yQtfsOnH9TYFSlA45nyqFm_T3k0cnbaSrTLatndMyADiQddQwGuyRMnrWmcC5akG7xPQKhLyeVyH5JMPqX4HQxs",
    });
    const file = new Blob(
      [
        "Name: " +
          name.value +
          ", Username: " +
          username.value +
          ", Email: " +
          email.value,
      ],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    dbx
      .filesUpload({
        path: "/" + name.value + "Folder/UserDetails.txt",
        contents: file,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.error || error);
      });
    //saveAs(file, "userDetails.txt");
  }

  const user = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      storeUserDetails();
      openSuccessfullyRegistered();
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      openScreen1();
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <b>
        <h className="mainHeading">AyushChat</h>
      </b>
      <br />
      <br />
      <br />
      <b>
        <font size="5">
          <h>Create a new account</h>
        </font>
      </b>
      <p className="p1">To use this website, enter your details</p>
      <br />
      <div className="InputArea">
        <h>Name</h>
        <br />
        <br />
        <input id="name" className="Input"></input>
        <br />
        <br />
        <h>Username</h>
        <br />
        <br />
        <input id="username" className="Input"></input>
        <br />
        <br />
        <h>Email</h>
        <br />
        <br />
        <input id="email" ref={emailRef} className="Input"></input>
        <br />
        <br />
        <h>Password</h>
        <br />
        <br />
        <input
          id="password"
          ref={passwordRef}
          type="password"
          className="Input"
        ></input>
        <br />
        <br />
        <button onClick={createAccount} className="Button">
          Sign Up
        </button>
        <br />
        <br />
        <h className="LoginHeading">
          Already have an account?{" "}
          <a className="aLogin" onClick={openLoginPage}>
            {" "}
            Login{" "}
          </a>
        </h>
      </div>
    </div>
  );
}
