import React, { useState } from "react";
import { newsData } from "../../details/newsdata";
import { useNavigate } from "react-router-dom";
import "../../components/newsComponents/NewsComponents";
import { FiArrowRight } from "react-icons/fi";

const News = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(4);

  const showMore = () => {
    setVisible((preValue) => preValue + 4);
  };
  return (
    <>
      <section>
        <div className="newsPage_container">
          {newsData.slice(0, visible).map((postData, postIndex) => (
            <div className="news_Box" key={postIndex}>
              <img src={postData.img} alt={postData.title} />
              <div className="news_Content">
                <button className="newsDateBtn">{postData.date}</button>
                <h5 className="newsHeading">
                  {postData.title.slice(0, 45)}...
                </h5>
                <h2
                  onClick={() =>
                    navigate("/singlePage", { state: { postData: postData } })
                  }
                  className="ArrBtn"
                >View Details <FiArrowRight /></h2>
              </div>
            </div>
          ))}
        </div>
        <div className="LoadBtn">
          <button onClick={showMore} className="loadBtn">
            Load More
          </button>
        </div>
      </section>

    </>
  );
};

export default News;
