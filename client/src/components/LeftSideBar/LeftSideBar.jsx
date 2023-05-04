import React from "react";
import "./LeftSideBar.css";
import { Link, NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
const isActive = true;
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <div className="side-nav-links">
        <Link to="/" className="side-nav-links">
          Home
        </Link>
      </div>

      <div className="side-nav-div">
        <div className="side-nav-links">
          <Link to="/" className="side-nav-links">
            <p className="public">PUBLIC</p>
          </Link>
        </div>
        <div className="side-nav-div">
          <div>
            <Link to="/Questions" className="side-nav-links">
              <LanguageIcon />
              <p>Questions</p>
            </Link>
          </div>
          <div>
            <Link to="/Tags" className="side-nav-links">
              <p>Tags</p>
            </Link>
          </div>
          <div>
            <Link to="/Users" className="side-nav-links">
              <p>Users</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
