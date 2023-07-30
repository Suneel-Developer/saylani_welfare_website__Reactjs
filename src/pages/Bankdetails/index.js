import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./bankdetails.css";
import mcbLogo from "./../../assets/mcb_logo.webp";
import dibLogo from "./../../assets/dib_logo.webp";
import hmbLogo from "./../../assets/hmb_logo.webp";

const BankDetails = () => {
  return (
    <section>
        <div className="bankdetails_banner">
          <button className="secondarybtn">Bank Details</button>
        </div>
      <div style={{border: "1px solid #ccc"}}>
        <h1 style={{background: "#eee", padding: "10px", fontSize: "17px"}}>Pakistan Bank Details</h1>
        <div className="accordinBoxs">
        
        <div className="accordin">
          <img src={mcbLogo} style={{ width: "200px" }} />
          <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>For Wajiba/Zakat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>For Nafila/Sadqat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accordin">
          <img src={dibLogo} style={{ width: "200px" }} />
          <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>For Wajiba/Zakat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>For Nafila/Sadqat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accordin">
          <img src={hmbLogo} style={{ width: "200px" }} />
          <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>For Wajiba/Zakat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>For Nafila/Sadqat Donations</Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Swift Code:
                </span>
                <span style={{ fontSize: "13px" }}>MCIBPKKI</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Currency:
                </span>
                <span style={{ fontSize: "13px" }}>PKR</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Title:
                </span>
                <span style={{ fontSize: "13px" }}>
                  Saylani Welfare International Trust - Wajiba
                </span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Branch Code:
                </span>
                <span style={{ fontSize: "13px" }}>132</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  Account Number:
                </span>
                <span style={{ fontSize: "13px" }}>1321000189660001</span>
                <br />
                <span style={{ fontWeight: "500", marginRight: "5px" }}>
                  IBAN:
                </span>
                <span style={{ fontSize: "13px" }}>
                  PK29MCIB1321000189660001
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BankDetails;
