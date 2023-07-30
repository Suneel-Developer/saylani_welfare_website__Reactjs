import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FLogo from "../../assets/logo.webp";
import Facebook from "../../assets/facebook.webp";
import Twiter from "../../assets/twiter.webp";
import whatshap from "../../assets/whatshap.webp";
import footerLogo from "../../assets/footerLogo.webp";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="top-footer">
        <div className="footerBox">
          <img src={FLogo} className='flogo' />
          <div className="socialLogo">
            <img src={Facebook} alt="" />
            <img src={Twiter} alt="" />
            <img src={whatshap} alt="" />
          </div>
        </div>
        <div className="footerBox2">
          <div className="shortBox">
            <h2>About</h2>
            <div className="links">
              <Link to="#">Introduction</Link>
              <Link to="#">Chairman Message</Link>
              <Link to="#">Annual Report</Link>
              <Link to="#">Bank Details</Link>
            </div>
          </div>
          <div className="shortBox">
            <h2>Explore</h2>
            <div className="links">
              <Link href="#">News</Link>
              <Link to="#">Media</Link>
              <Link to="#">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footerBox">
        <h2>Contact</h2>
            <div className="links">
              <span>A-25, Bahadurabad Chowrangi Karachi, Pakistan</span>
              <span>UAN: 111-729-526 (+0092-213)4130786-90</span>
              <span>CELL: 92-311-1729526</span>
              <span>USA NO +1(716)941 7792</span>
              <span>UK NO (+44)115 970 6256</span>
            </div>
        </div>
        </div>






        <div className="middle-footer">
            <img src={footerLogo} alt="" />
        </div>
        <div className="bottom-footer">
            <div className="bfooter_details">
                <span>IP address data powered by</span>
                <Link>IPinfo</Link>
            </div>
            <span>Copyright 2023 by Saylani Welfare Int Trust</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
