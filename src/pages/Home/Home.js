import React from "react";
import NewsComponents from "../../components/newsComponents/NewsComponents";
import ServiceComp from "../../components/ServiceComp/ServiceComp";
import Funding from "../../components/Funding/Funding";
import "./Home.css";
import banner from "../../assets/banner.webp";
import mainImage from "../../assets/main.webp";
import projectImage from "../../assets/project-image.webp";
import projectIcon1 from "../../assets/45.webp";
import projectIcon2 from "../../assets/46.webp";
import projectIcon3 from "../../assets/47.webp";
import projectIcon4 from "../../assets/48.webp";
import fundImage1 from "../../assets/donate1.webp";
import fundImage2 from "../../assets/donate2.webp";
import fundImage3 from "../../assets/donate3.webp";
import CountUp from "react-countup";
import counterImg1 from "../../assets/counterImg1.webp";
import counterImg2 from "../../assets/counterImg2.webp";
import counterImg3 from "../../assets/counterImg3.webp";
import counterImg4 from "../../assets/counterImg4.webp";

const Home = () => {
  return (
    <>
      <section className="main_container">
        <div className="content">
          <h2 className="content_heading">
            Welcome to the <br /> <span className="green_theme">Saylani </span>
            Walfare
          </h2>
          <h3 className="animated_heading">
            The largest NGO offering free
            <span className="typed_curser"> IT and vocational trainings</span>
          </h3>
          <p className="sub_heading">
            Saylani Welfare is on the ground and already working with local
            communities to assess how best to support underprivileged families
            in more than 63 areas of day to day lives.
          </p>
          <button className="btn slide_button">
            Explore More <i className="fas fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="image">
          <img src={mainImage} alt="" />
        </div>
      </section>

      <ServiceComp />
      {/* ------------------------------------------------- Banner  */}
      <section className="banner">
        <div className="banner_image">
          <img src={banner} alt="" />
        </div>
      </section>

      {/* -------------------------------------------------------- donate box */}

      <section className="funding_Container">
        <Funding fundImage={fundImage1} title="Zakat" />
        <Funding fundImage={fundImage2} title="Sehar-o-Iftar" />
        <Funding fundImage={fundImage3} title="Ramazan Ration" />
      </section>

      {/* ------------------------------------------------------------------- projects */}
      <section className="project_container">
        <div className="upcoming_project_picture">
          <div className="upcoming_picture_box">
            <img src={projectImage} alt="" />
            <div className="upcoming_text_box">
              <h3 className="upcoming_text-heading">
                Saylani serve almost 300,000 underprivileged on daily basis
              </h3>
            </div>
            <div className="upcoming_text_box_transparent_1"></div>
            <div className="upcoming_text_box_transparent_2"></div>
          </div>
        </div>
        <div className="project_details">
          <h2 className="project_details_heading">Other Projects</h2>

          <div className="project_details_items">
            <div className="project_details_items_image">
              <img src={projectIcon1} alt="" />
            </div>
            <div className="project_details_items_head">
              <h5 className="project_details_items_head_title">Hepatitis</h5>
              <span className="project_details_items_head_text">
                Saylani Welfare has also set up a clinic for the best treatment
                of hepatitis patients where hepatitis patients are being treated
              </span>
            </div>
          </div>

          <div className="project_details_items">
            <div className="project_details_items_image">
              <img src={projectIcon2} alt="" />
            </div>
            <div className="project_details_items_head">
              <h5 className="project_details_items_head_title">
                Housing Society
              </h5>
              <span className="project_details_items_head_text">
                Saylani Welfare is also providing its own home facility for the
                homeless people. So far, thousands of houses and flats have been
                constructed and given in easy installments
              </span>
            </div>
          </div>

          <div className="project_details_items">
            <div className="project_details_items_image">
              <img src={projectIcon3} alt="" />
            </div>
            <div className="project_details_items_head">
              <h5 className="project_details_items_head_title">IT Literacy</h5>
              <span className="project_details_items_head_text">
                We are committed to developing more than 1 million software
                developers, which will add about 100 billion annually to
                Pakistan's economy and help ease the debt burden on Pakistan
              </span>
            </div>
          </div>

          <div className="project_details_items">
            <div className="project_details_items_image">
              <img src={projectIcon4} alt="" />
            </div>
            <div className="project_details_items_head">
              <h5 className="project_details_items_head_title">Tharparkar</h5>
              <span className="project_details_items_head_text">
                In Tharparkar, Saylani has set up several schools and ro plants,
                dug wells and brought the children there to Karachi and taught
                them modern technology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- Counter  */}
      <section className="counter_Container ">
        <div className="counterBoxes blueLayer">
        <div className="counterBox">
          <div className="imgBox">
            <img src={counterImg1} alt="" />
          </div>
          <h1>
            <CountUp start={1000} end={300000} duration={5} delay={1} />
          </h1>
          <span>Food</span>
          <span>(Daily)</span>
        </div>
        <div className="counterBox">
          <div className="imgBox">
            <img src={counterImg2} alt="" />
          </div>
          <h1>
            <CountUp start={1000} end={20000} duration={5} delay={1} />
          </h1>
          <span>Family Adoption</span>
          <span>(Monthly)</span>
        </div>
        <div className="counterBox">
          <div className="imgBox">
            <img src={counterImg3} alt="" />
          </div>
          <h1>
            <CountUp start={1000} end={25000} duration={5} delay={1} />
          </h1>
          <span>Education</span>
          <span>(Monthly)</span>
        </div>
        <div className="counterBox">
          <div className="imgBox">
            <img src={counterImg4} alt="" />
          </div>
          <h1>
            <CountUp start={1000} end={125000} duration={5} delay={1} />
          </h1>
          <span>Mediacl</span>
          <span>(Monthly)</span>
        </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------NewsComponents */}
      <h1 className="heading">News</h1>
      <NewsComponents />

      {/* ------------------------------------------------------------------------ SubsCribe  */}
    </>
  );
};

export default Home;
