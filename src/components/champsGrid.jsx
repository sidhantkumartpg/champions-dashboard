import React from "react";
import ChampCard from "./champCard";

const ChampsGrid = ({ champs, addToWatchList, isLoading }) => {
  if (isLoading) {
    return <h3 className="loading-indicator">Loading...</h3>;
  } else {
    return (
      <div id={"grid-id"} className={`champs-grid`}>
        {champs.map((champ) => (
          <ChampCard
            key={champ["id"]}
            champ={champ}
            addToWatchList={addToWatchList}
            inWatchList={champ.inWatchList}
          />
        ))}
      </div>
    );
  }
};

export default ChampsGrid;
