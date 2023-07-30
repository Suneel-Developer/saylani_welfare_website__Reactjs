import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact_container">
        <div className="contact_banner">
          <button className="secondarybtn">Contact Us</button>
        </div>
        <div className="contact">
          <div className="inputFields">
            <div className="userName_Fields">
              <div className="input_fields">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="input_fields">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input_fields">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="input_fields">
              <label>Message</label>
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <button className="contactBtn">Submit</button>
          </div>
          <div className="locationMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.86223363387!2d67.068066!3d24.882664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eea39ffafe1%3A0x66f953936852019b!2sSaylani%20Welfare%20Int.%20Trust!5e0!3m2!1sen!2sus!4v1681801766156!5m2!1sen!2sus"
              
             
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
