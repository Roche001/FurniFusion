import React, { useState, useEffect } from "react";
import "./Log.css";
import { Link } from "react-router-dom";

const Log = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your validation logic here
    const isValid =
      username === "correct_username" && password === "correct_password";

    if (isValid) {
      if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Redirect to the home page or perform any other action
      window.location.href = "home.html";
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="log-container">
      <div>
        <form onSubmit={handleSubmit} className="log-page">
          <h3>Log In</h3>
          <input
            className="username"
            type="text"
            name="username"
            placeholder="Username"
            maxLength="12"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <br />
          <input
            className="username"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <input type="submit" value="Submit" className="btn btn-success" />
          <br />
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={remember}
              onChange={handleRememberChange}
            />{" "}
            Remember me
          </label>
          <h4>
            Don't have an account?{" "}
            <Link to="/Register">
              {" "}
              <span>Register Here</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Log;
