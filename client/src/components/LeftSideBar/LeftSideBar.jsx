import React from "react";
import "./LeftSideBar.css";
import { Link, NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <p>PUBLIC</p>
      <div className="side-nav">
        <Link
          to="/"
          className="side-nav-links"
          activeClass="active"
          style={{ paddingLeft: "40px" }}
        >
          <p>Home</p>
        </Link>
      </div>
      <div className="side-nav-div">
        <div>
          <Link to="/Questions" className="side-nav-links">
            <LanguageIcon />
            <p>Questions</p>
          </Link>
          <Link to="/Tags" className="side-nav-links">
            <p>Tags</p>
          </Link>
          <Link to="/Users" className="side-nav-links">
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
