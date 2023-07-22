import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your logic for validating the login credentials
    // For simplicity, we'll assume the login is successful if both fields are non-empty
    if (name.trim() !== "" && password.trim() !== "") {
      // Navigate to the NextPage component
      navigate("/next-page");
    } else {
      alert("Invalid credentials! Please enter both name and password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    border: "10px solid #ccc"
  },
  formContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  }
};

export default LoginPage;
