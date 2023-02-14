import React, { useState, useEffect } from "react";
import "./Loginpage.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginpage({ setLoginUser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    Axios.post(
      "https://node-login-register-api-lr-dev.onrender.com/login",
      user
    ).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <>
      <h1
        className="mt-5"
        style={{
          color: "purple",
          textAlign: "center",
          backgroundColor: "goldenrod",
        }}
      >
        WELCOME TO OUR EQUIPMENT RENTAL PORTAL
      </h1>
      <div className="login" style={{ marginTop: "10vh", marginLeft: "75vh" }}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </>
  );
}

export default Loginpage;
