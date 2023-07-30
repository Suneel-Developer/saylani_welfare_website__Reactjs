import React from "react";
import "./news.css";
import { newsData } from "../../details/newsdata";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const News = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="news_container">
        {newsData.slice(0, 4).map((postData, postIndex) => (
          <div key={postIndex} className="news_Box">
            <img src={postData.img} alt={postData.title} />
            <div className="news_Content">
              <button className="newsDateBtn">{postData.date}</button>
              <h5 className="newsHeading">{postData.title.slice(0, 45)}...</h5>
              <h2 onClick={() => navigate("/singlePage", { state: { postData: postData } }) } className='ArrBtn'>View Details <BsArrowRight /></h2>
            </div>
          </div>
        ))}
      </section>
    </> 
  );
};

export default News;
