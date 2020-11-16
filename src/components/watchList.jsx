import React from "react";
import { Redirect } from "react-router-dom";

const WatchList = (props) => {
  if (!props.location.state) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="watchlist-container">
        {props.location.state.watchList.map((champ) => (
          <p>{champ}</p>
        ))}
      </div>
    );
  }
};

export default WatchList;
