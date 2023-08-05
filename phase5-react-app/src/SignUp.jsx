import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    status: "Select...",
    email: "",
    phone_number: "",
    location: "",
    group_number: 0,
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Validate form fields (additional validation can be added)
    if (user.password !== user.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to create user. Please try again.");
        }
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        setUser(data.user);
        window.alert(`Successfully created an account for ${user.name}! XD`);
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message); // Store the error message in state
      });
      console.log(error);
  };

  return (
    <>
      <h1>SignUp</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            value={user.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={user.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Type of User</label>
          <select
            id="status"
            onChange={handleChange}
            value={user.status}
            type="text"
          >
            <option value="">Select...</option>
            <option value="Farming Group Administrator">
              Farming Group Administrator
            </option>
            <option value="Public Client">Public Client</option>
          </select>
        </div>

        {user.status !== "Select..." && user.status !== "Public Client" && (
        <div>
          <label htmlFor="group_number">Number of Members:</label>
          <input
            type="number"
            id="group_number"
            value={user.group_number}
            onChange={handleChange}
            required
          />
        </div>
        )}

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={user.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={!!error}>
          Register
        </button>
      </form>
    </>
  );
};
export default SignUpForm;