import React, { useState } from "react";

import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState(null);


  const signupSubmitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("token", "supersuperrandomtokenqwaszx");
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);
    alert("Login with the same email & password now!");
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (
      user.email === localStorage.getItem("email") &&
      user.password === localStorage.getItem("password")
    ) {
      alert("You can see the posts now!");
      setToken(localStorage.getItem("token"));
    } else {
      alert("Wrong Information");
    }
  };

  const onChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <h1>{props.authMode ? "Signup" : "Login"}</h1>
      {props.authMode ? (
        <form className={styles.AuthBox} onSubmit={signupSubmitHandler}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
          />
          <button type="submit">Signup</button>
        </form>
      ) : (
        <form className={styles.AuthBox} onSubmit={loginSubmitHandler}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
          />
          <button type="submit">Login</button>
        </form>
      )}
      <p>
        or{" "}
        <button onClick={props.authSwitch} className={styles.authSwitchBtn}>
          {!props.authMode ? "Create an account" : "Log into your account"}
        </button>
      </p>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      {token ? <Link to="/allposts">Posts</Link> : null }
    </div>
  );
};

export default Home;
