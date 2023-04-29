import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item-nav-logo">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item-nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item-nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item-nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search...." />
          <SearchIcon className="searchIcon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item-nav-links">
            Login
          </Link>
        ) : (
          <>
            <Link style={{ textDecoration: "none" }} to="/User">
              <Avatar
                Children={"M"}
                backgroundColor={"#009dff"}
                px={"10px"}
                py={"10px"}
                borderRadius={"50%"}
                color={"white"}
              />
            </Link>
            <button className="nav-item-nav-links">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
