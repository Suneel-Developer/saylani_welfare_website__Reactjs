import React from "react";
import "./Funding.css";

const Funding = (props) => {
  return (
    <>
      <div className="funding_box">
        <img src={props.fundImage} alt="" />
        <div className="fund_box">
          <div className="box">
            <h5>{props.title}</h5>
            <button className="fund_btn">Donate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funding;
