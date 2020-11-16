import React from "react";
import { Link } from "react-router-dom";

const Header = ({ watchCount }) => {
  return (
    <div id="header">
      <Link to="/dashboard">
        <span id="logo">
          Champions dashboard<i className="champ-icon fas fa-gamepad"></i>
        </span>
      </Link>
      <Link to="/watchlist">
        Watchlist <span id="watchlist-count">{watchCount}</span>
      </Link>
    </div>
  );
};

export default Header;
