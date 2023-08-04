import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State for storing error message

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your login endpoint with user credentials
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        // console.log(data)
        login(data.user); // Update the user state
        window.alert(`Welcome back ${data.user.name} :D!`);
        navigate("/landing_page"); // Redirect to the desired page after successful login
      })
      .catch((error) => {
        setError(error.message); // Store the error message in state
      });
  };
  return (
    <>
      <h1>LOGIN</h1>
      {error && <p className="error-message">Invalid username or password</p>}
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
