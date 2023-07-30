import React from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div>
      <section className="topHeader_container">
        <div className="topHeader_contact">
          <div className="header_contact">
            <i className="fa fa-envelope"></i>
            <Link>info@SaylaniWelfare.com</Link>
          </div>
          <div className="header_contact">
            <i className="fa-solid fa-phone-flip"></i>
            <Link>021-111-729-526</Link>
          </div>
        </div>
        <button className="language_button">ENGLISH</button>
      </section>
    </div>
  );
};

export default TopHeader;
