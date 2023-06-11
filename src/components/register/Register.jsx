import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your validation logic here

    // Redirect to the home page or perform any other action
    window.location.href = "home.html";
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setAge("");
    setDateOfBirth("");
    setAgree(false);
  };
  return (
    <div className="register-container">
      <div className="container mt-4">
        <div className="shadow p-4">
          <form onSubmit={handleSubmit} className="reg-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                className="form-control"
                placeholder="Enter age (above 10)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                min={11}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                className="form-control"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="agree"
                className="form-check-input"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label className="form-check-label" htmlFor="agree">
                I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-success mr-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClear}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
