import React from "react";
import { useLocation } from "react-router-dom";
import "./SinglePage.css";
import faceBook from '../../assets/facebook.webp'
import twiter from '../../assets/twiter.webp'
import whatShap from '../../assets/whatshap.webp'

const SinglePage = () => {
  const location = useLocation();
  const PostData = location.state.postData;

  return (
    <>
      <section className="detailsPage_Container">
        <div className="details">
          <h1 className="detailTitle">{PostData.title}</h1>
          <span className="detailDate">{PostData.date}</span>
          <img src={PostData.img} alt="" />
          <p className="detailData">{PostData.details}</p>

          <div className="detailIcon">
            <img src={faceBook} alt="FacebookLogo" />
            <img src={twiter} alt="TwiterLogo" />
            <img src={whatShap} alt="WhatshapLogo" />
            
          </div>
        </div>
        <div className="donate_box">
          <h2 className="detailTitle">Donate now</h2>
          <input type="number" className="DetailInput" />
          <button className="DetailBtn">Donate</button>
          <hr />
          <span>For confirmation please call us at (021) 111-729-526</span>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
