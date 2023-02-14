import React, { useState, useEffect } from "react";
import "./Registerpage.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Registerpage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      Axios.post(
        "https://node-login-register-api-lr-dev.onrender.com/register",
        user
      ).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="register" style={{ marginTop: "10vh", marginLeft: "75vh" }}>
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
}

export default Registerpage;
