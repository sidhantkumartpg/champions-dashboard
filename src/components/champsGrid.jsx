import React, { useEffect, useState } from "react";
import ChampCard from "./champCard";

const ChampsGrid = ({ champs, handleClick }) => {
  return (
    <div id={"grid-id"} className={`champs-grid`}>
      {champs.map((champ) => (
        <ChampCard key={champ["id"]} champ={champ} />
      ))}
    </div>
  );
};

export default ChampsGrid;
