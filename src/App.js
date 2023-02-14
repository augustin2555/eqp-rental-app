import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Loginpage from "./Components/Login/Loginpage";
import Registerpage from "./Components/Register/Registerpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Navbar/Dashboard";
import Products from "./Components/Navbar/Products";
import AboutUs from "./Components/Navbar/AboutUs";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Loginpage setLoginUser={setLoginUser} />
              )
            }
          />
          {/* {user && user._id ? <Homepage /> : <Loginpage />} */}
          <Route
            path="/login"
            element={<Loginpage setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/about-us"} element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
