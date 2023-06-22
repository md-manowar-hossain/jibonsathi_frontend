import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (useremail, userpassword, navigate) => {

    // Simulate login validation
    if (useremail === "jibonsathi@gmail.com" && userpassword === "password") {
      setIsLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", useremail);

      setEmail("");
      setPassword("");

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");

    setIsLoggedIn(false);

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
