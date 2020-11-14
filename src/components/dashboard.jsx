import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiConstants, token } from "../constants/constants";
import ChampsGrid from "./champsGrid";
import Pagination from "./pagination";
import { objIsEmpty } from "../utils/utilityFunc";

const Dashboard = (props) => {
  const [champs, setChamps] = useState([]);
  const [champsPerPage, setChampsPerPage] = useState(8); // Can be refrained from being a state
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [sortOrder, setSortOrder] = useState({});

  // Get champs on current page
  const indexOfLastChamp = currentPage * champsPerPage;
  const indexOfFirstChamp = indexOfLastChamp - champsPerPage;
  const currentChamps = champs.slice(indexOfFirstChamp, indexOfLastChamp);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function changeSortOrder() {
    if (objIsEmpty(sortOrder)) {
      setSortOrder({ order: "desc" });
      const sortedList = []
        .concat(champs)
        .sort((a, b) => (a["name"] > b["name"] ? -1 : 1));
      setChamps(sortedList);
    } else {
      let sortedList;
      if (sortOrder.order === "desc") {
        sortedList = []
          .concat(champs)
          .sort((a, b) => (a["name"] > b["name"] ? 1 : -1));
      } else {
        sortedList = []
          .concat(champs)
          .sort((a, b) => (a["name"] > b["name"] ? -1 : 1));
      }
      setChamps(sortedList);
      setSortOrder({ order: sortOrder.order === "desc" ? "asc" : "desc" });
    }
  }

  useEffect(() => {
    const axiosConfig = {
      method: "get",
      url: `${apiConstants.BASE_URL}${apiConstants.GET_ALL_CHAMPS}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(axiosConfig)
      .then((champList) => {
        console.log(champList.data);
        setChamps(champList.data);
      })
      .catch(console.log("something went wrong"));
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="champs-grid-container container">
        <h1>League of legends champions</h1>
        <div className="searchbox">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="search-champs-input"
            placeholder="Search champion by name"
          />
          <div className="sort-results" onClick={changeSortOrder}>
            <span className="sort-criteria">Sort by name</span>
            {!objIsEmpty(sortOrder) && (
              <i className={`fa fa-sort-alpha-${sortOrder.order}`} />
            )}
          </div>
        </div>
        <ChampsGrid champs={currentChamps} animate={animate} />
        <Pagination
          champsPerPage={champsPerPage}
          totalChamps={champs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Dashboard;
