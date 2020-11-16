import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ChampsGrid from "./champsGrid";
import Pagination from "./pagination";

const WatchList = ({ champs, handleWatchList, changeSortOrder, sortOrder }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const champsPerPage = 8;

  champs = champs.filter((champ) => champ.inWatchList);

  let indexOfFirstChamp;
  let indexOfLastChamp;
  let currentChamps;
  let champsCount;

  champsCount = champs.length;
  // Get champs on current page
  indexOfLastChamp = currentPage * champsPerPage;
  indexOfFirstChamp = indexOfLastChamp - champsPerPage;
  currentChamps = champs.slice(indexOfFirstChamp, indexOfLastChamp);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="champs-grid-container container">
      <h1>
        Watch list <i className="watchlist-icon fas fa-heart"></i>
      </h1>
      {champs.length === 0 ? (
        <h3 className="no-champs-found">
          Seriously you don't like any champion ?
        </h3>
      ) : (
        <>
          <ChampsGrid champs={currentChamps} addToWatchList={handleWatchList} />
          <Pagination
            champsPerPage={champsPerPage}
            totalChamps={champsCount}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default WatchList;
