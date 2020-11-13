import React, { useEffect, useState } from "react";
import ChampCard from "./champCard";

const ChampsGrid = ({ champs, handleClick }) => {
  // const mounted = useRef();

  // useEffect(() => {
  //     console.log('-----Champs Grid MOUNTED');
  //     return function champsGridUnmount() {
  //         console.log('-----Champs Grid UNMOUNTED----');
  //     }
  // }, [champs]);

  // useEffect(() => {
  //     if (!mounted.current){           // Jugaad (older versions)
  //         console.log('----COMPONENT DID MOUNT ____ CHAMPS GRID ____ -------');
  //         mounted.current = true;
  //     }
  //     else {
  //         console.log('------COMPONENT DID UPDATE _____ CHAMPS GRID ____ ------');
  //     }

  //     return function unmountGrid () {
  //         console.log('------ COMPONENT UNMOUNTED _____ CHAMPS GRID ____ ------')
  //     }
  // });

  // useEffect(() => {
  //     if (champs.length > 0)
  //     {
  //         let champ = document.getElementById('grid-id');
  //         champ.classList.remove('animate');
  //         champ.classList.add('animate');
  //         setTransition('translateX(200%)');
  //     }
  // }, [champs]);

  // useEffect(() => {
  //     console.log('Did mount');
  // }, []);

  return (
    <div id={"grid-id"} className={`champs-grid`}>
      {champs.map((champ) => (
        <ChampCard key={champ["id"]} champ={champ} />
      ))}
    </div>
  );
};

export default ChampsGrid;
