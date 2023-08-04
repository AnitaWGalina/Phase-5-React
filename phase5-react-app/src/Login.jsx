
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // Add this line for selectedOption state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3004/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        navigate("/");
      });
  };

  const handleDropdownChange = (e) => {
    // Add this event handler
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <h1>LOGIN</h1>

      <div>
        <label>
          Select User Type:
          <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="">Select...</option>
            <option value="farmer">Farmer</option>
            <option value="user">General User</option>
          </select>
        </label>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input
              type="text"
              name="password"
              id="passw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
