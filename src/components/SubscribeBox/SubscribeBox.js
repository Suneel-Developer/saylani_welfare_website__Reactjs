import React from "react";
import "./Subscribe.css";

const Subscribebox = () => {
  return (
    <>
      <section>
        <div className="subsCribe_Container green-subs">
            <h1 className="subsTitle">Saylani Guide</h1>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="subsInput"
            />
            <button className="subsBtn">Subscribe</button>
          </div>
      </section>
    </>
  );
};

export default Subscribebox;
