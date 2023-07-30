import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./pagination.css";
import { GoLocation } from "react-icons/go";

const PaginationComponent = ({ data, itemsPerPage }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  return (
    <div>  <div className="pagination_container">
      {currentData.map((item, index) => (
        <div key={index} className="pBox">
          <GoLocation className="locationIcon" />
          <h2 className="title">{item.title}</h2>
          <p className="location">{item.location}</p>
          <span className="contactNum">0311-1729526, 021-111-729-526</span>
          <p className="systemBtn">{item.system}</p>
        </div>
      ))}

    </div>
      <div className="paginationBoxShape">
        <Pagination
          count={10}
          color="primary"
          page={page}
          shape="rounded"
          endPage
          pageRangeDisplayed={10}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
