import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiConstants, token } from "../constants/constants";
import ChampsGrid from "./champsGrid";
import Pagination from "./pagination";

const Dashboard = (props) => {
  const [champs, setChamps] = useState([]);
  const [champsPerPage, setChampsPerPage] = useState(8); // Can be refrained from being a state
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);

  // Get champs on current page
  const indexOfLastChamp = currentPage * champsPerPage;
  const indexOfFirstChamp = indexOfLastChamp - champsPerPage;
  const currentChamps = champs.slice(indexOfFirstChamp, indexOfLastChamp);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
