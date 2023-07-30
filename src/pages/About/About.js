import React from "react";
import "./About.css";
import AboutImage from "../../assets/aboutImage.webp";

const About = () => {
  return (
    <div className="about_Container">
      <div className="heading_Container">
        <div className="about_details">
          <h4>About - Introduction</h4>
          <h1>Introduction</h1>
          <p>
            Saylani Welfare International Trust has been serving humanity for 22
            years. Saylani has spent around 7 billion rupees in the service of
            humanity in 2021 and our plan is to spend about 11 billion rupees
            for this cause in 2022.
          </p>
        </div>
        <div className="aboutImage">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
      <div className="details_Container">
        <h1>More</h1>
        <p>
          Saylani Welfare International Trust has been working for the last 22
          years to improve the conditions of the less privileged, helpless, and
          handicapped individuals. The organization is working day and night to
          make life happier, especially for the middle class, lower middle class
          and even lower class. At time of establishing the organization, the
          founder of Saylani Welfare International Trust and a few of his
          associates had made a commitment to serve the distressed people living
          in Pakistan and abroad in all stages of life. It is a blessing in
          disguise that today the organization is serving humanity in more than
          63 areas of life without any discrimination. <br /> <br /> The soul,
          founder and patron of this organization is Hazrat Allama Maulana
          Muhammad Bashir Farooq. He is also a well-known spiritual person and
          Islamic scholar in the Islamic world. It is the result of his efforts
          that today Saylani Welfare International Trust is serving humanity all
          over the world. <br /> <br /> The organization started out as a rented
          house and today has at least 630 branches worldwide. The organization
          also has more than 630 Dastarkhwan, where thousands of employees are
          employed. Today, the organization spends more than 7 billion annually
          on the service and welfare of humanity. Not only this, but more than
          63 spheres of life from birth to death (including food, health,
          education, social welfare, clean water, marriage, mass I.T training,
          vocational training, assistance to Syrian and Burmese refugees,
          pilgrim services, school services fees, easy loans, easy employment,
          hairdressing, medical & diagnostic center, laboratory tests, x-ray,
          ultrasound, ECG, consultant clinic, mobile dining, mobile clinic,
          mobile air care clinic & operation theater, and in case of natural
          disasters aid) our organization is serving humanity. <br /> <br />{" "}
          More than 300,000 people are benefited daily by the Saylani. The
          organization provides vocational training to unskilled people in
          various fields, renting of poor people houses, school fees and annual
          expenses of their children, assistance in marriage of their daughters,
          loan facility for running small scale business, rickshaws and
          motorbikes for employment, stalls, shop delivery, finger chips
          machine, sewing machines for women and other items are provided.
        </p>
      </div>
      <div className="about_timeline">
        <div className="timeline">
          <div className="timeline_heading">
            <span className="dotIcon"></span>

            <span className="heading_title">Saylani Health</span>
          </div>

          <div className="timeline_details">
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Health Department</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">
                Blood Bank & Thalassemia Center
              </span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Hijama</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">X-Ray & Ultrasound</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">
                Mother & Child Care Center
              </span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Medical Equipment</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Laboratory Facility</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Mobile Health Clinic</span>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline_heading">
            <span className="dotIcon"></span>
            <span className="heading_title">Saylani Education</span>
          </div>
          <div className="timeline_details">
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Saylani Schooling System</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Textile Training Program</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">R.O. Plant Technician</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">SMIT program</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">PIAIC</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">
                Motor Bike Mechanic Training
              </span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Mobile Repairing</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">SBIL</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Saylani Online Quran Academy</span>
            </div>
            <div className="details_data">
              <span className="details_Icon">★</span>
              <span className="details_heading">Madarsa-e-Faizan-e-Mustafa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
