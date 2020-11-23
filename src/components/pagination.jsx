import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ champsPerPage, totalChamps, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChamps / champsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              number === currentPage && "current-page-item"
            }`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  champsPerPage: PropTypes.isRequired,
  totalChamps: PropTypes.isRequired,
  paginate: PropTypes.isRequired,
  currentPage: PropTypes.isRequired,
};

export default Pagination;
