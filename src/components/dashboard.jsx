import React, { useEffect, useState } from "react";
import { apiConstants, token } from "../constants/constants";
import ChampsGrid from "./champsGrid";
import Pagination from "./pagination";
import { objIsEmpty } from "../utils/utilityFunc";

const Dashboard = ({
  champs,
  handleWatchList,
  changeSortOrder,
  sortOrder,
  isLoading,
}) => {
  const champsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  // const [watchList, setWatchList] = useState([]);

  // if (!champs) {
  //   return (
  //     <div className="champs-grid-container container">
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }

  let indexOfFirstChamp;
  let indexOfLastChamp;
  let currentChamps;
  let champsCount;

  if (searchText.trim()) {
    currentChamps = champs.filter((champ) =>
      champ["name"].toLowerCase().includes(searchText.toLowerCase())
    );
    champsCount = currentChamps.length;
    indexOfLastChamp = currentPage * champsPerPage;
    indexOfFirstChamp = indexOfLastChamp - champsPerPage;
    currentChamps = currentChamps.slice(indexOfFirstChamp, indexOfLastChamp);
    // currentChamps = currentChamps.slice(currentChamps.length, )
  } else {
    champsCount = champs.length;
    // Get champs on current page
    indexOfLastChamp = currentPage * champsPerPage;
    indexOfFirstChamp = indexOfLastChamp - champsPerPage;
    currentChamps = champs.slice(indexOfFirstChamp, indexOfLastChamp);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleSearchChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="champs-grid-container container">
        <h1>League of legends champions</h1>
        <div className="searchbox">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="search-champs-input"
            placeholder="Search champion by name"
            onChange={handleSearchChange}
            value={searchText}
          />
          <div className="sort-results" onClick={changeSortOrder}>
            <span className="sort-criteria">Sort by name</span>
            {!objIsEmpty(sortOrder) && (
              <i
                className={`fas fa-sort-alpha-${
                  sortOrder.order === "asc" ? "up" : "down-alt"
                }`}
              />
            )}
          </div>
        </div>
        <ChampsGrid
          champs={currentChamps}
          addToWatchList={handleWatchList}
          isLoading={isLoading}
        />
        <Pagination
          champsPerPage={champsPerPage}
          totalChamps={champsCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Dashboard;
