import React from "react";
import ChampCard from "./champCard";

const ChampsGrid = ({ champs, addToWatchList }) => {
  console.log("Champs grid rendered");
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
};

export default ChampsGrid;
