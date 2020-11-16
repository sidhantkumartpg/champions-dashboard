import React from "react";
import { Link } from "react-router-dom";

const Header = ({ watchCount }) => {
  return (
    <div id="header">
      <span id="logo">Champions dashboard</span>
      <Link to="/watchlist">
        Watchlist <span id="watchlist-count">{watchCount}</span>
      </Link>
    </div>
  );
};

export default Header;
