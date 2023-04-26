import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const Navbar = () => {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link className="nav-item-nav-btn">
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
          <SearchIcon />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item-nav-links">
            Login
          </Link>
        ) : (
          <>
            <Link to="/">
              <Avatar></Avatar>
            </Link>
            <Button>Logout</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
