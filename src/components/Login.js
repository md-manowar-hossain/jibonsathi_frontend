import * as React from "react";
import male from "../assests/images/male.svg";
import styles from "../assests/css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { isLoggedIn } = useContext(AuthContext);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    login(email, password, navigate);
    
  };
  // const loginHandler = (event) => {
  //   event.prventDefault();

  //   if (email === "jibonsathi@gmail.com" && password === "password") {
  //     setIsLoggedIn(true);

  //     localStorage.setItem("isLoggedIn", "true");
  //     localStorage.setItem("email", email);

  //     setEmail("");
  //     setPassword("");
  //   } else {
  //     alert("Invalid email or password");
  //   }
  // };

  // const LogoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("email");

  //   setIsLoggedIn(false);
  // };

  const register = () => {
    navigate("/register");
  };

  // const nlogin = () => {
  //   navigate("/dashboard");
  // };

  return (
    <section>
      <div className={styles.CardContainer}>
        <form onSubmit={handleFormSubmit} className={styles.card}>
          <div className={styles.title}>
            <div>Login To Your Account</div>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={emailHandler}
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={passwordHandler}
              placeholder="Password"
            />
          </div>
          <div className={styles.rememberContainer}>
            <div className={styles.rememberMe}>
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div className={styles.forgetPass}>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className={styles.login}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.or}>or</div>
          <div className={styles.google}>
            <button>Continue With Google</button>
          </div>
          <div className={styles.noAccount}>Don't have an account?</div>
          <div className={styles.create}>
            <button onClick={register}>Create Account</button>
          </div>
        </form>
      </div>
    </section>
  );
}
