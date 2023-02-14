import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark" style={{ height: "80px" }}>
        <a className="d-flex navbar-brand" href="#">
          <img
            src="https://i.pinimg.com/736x/db/1f/fa/db1ffad2a17e3c69f67e383d8e9cdd5a.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            style={{ margin: "0 10px 0 0" }}
          />
          <h6 className="mt-1">EQUIPMENT RENTAL PORTAL</h6>
        </a>
        <div className="mb-1" style={{ marginRight: "500px" }}>
          <Link
            to={"/dashboard"}
            className="btn btn-danger btn-block fa-lg gradient-custom-2"
            style={{ marginRight: "6px" }}
          >
            Dashboard
          </Link>
          <Link
            to={"/products"}
            className="btn btn-danger btn-block fa-lg gradient-custom-2 "
            style={{ marginRight: "6px" }}
          >
            Products
          </Link>

          <Link
            to={"/about-us"}
            className="btn btn-danger btn-block fa-lg gradient-custom-2 "
            style={{ marginRight: "6px" }}
          >
            About Us
          </Link>
        </div>
        <div className="d-flex gap-2">
          {/* <Link
          to={"/navbar"}
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mt-3"
        >
          <FontAwesomeIcon icon={faHome} />
        </Link> */}
          <Link
            to={"/login"}
            className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3 mt-3"
            style={{ marginRight: " 6px" }}
          >
            Logout
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Homepage;
