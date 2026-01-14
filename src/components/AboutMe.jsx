import { motion } from "motion/react";
import {} from "react";
import "../style/aboutme.css";

import appIcon from "../assets/images/applicationicon.svg";
import webIcon from "../assets/images/webdesignicon.svg";
import softwareIcon from "../assets/images/softwareicon.svg";

const AboutMe = ({ setDisableActivity }) => {
  return (
    <motion.div className="aboutme-main-container">
      <motion.div>
        <h1>Who Am I?</h1>
        <p>
          <strong>Hi Im Charles Palencia</strong> I am a full-stack software
          developer with experience building real-world web applications. I
          enjoy learning new technologies, solving problems, and creating
          systems that are reliable and easy to use. I am flexible, hardworking,
          and able to learn quickly, even when working with new tools. I am
          passionate about programming and committed to professional,
          high-quality work.
        </p>
      </motion.div>
      <ServiceCards />
      <div className="education-container">
        <h1>EDUCATIONAL BACKGROUND</h1>
        <div className="education-content">
          <div>
           <ul>
              <li>
                <strong>Elementary</strong>
              </li>
              <li>Gabriela Silang Elementary School</li>
              <li>2006 – 2013</li>
            </ul>
            <ul>
              <li>
                <strong>High School</strong>
              </li>
              <li>Benigno Aquino Jr. High School</li>
              <li>2013 – 2017</li>
            </ul> 
          </div>
          <div>
            <ul>
              <li>
                <strong>Senior High School</strong>
              </li>
              <li>Information Communication Technology</li>
              <li>St. Claire College of Caloocan City</li>
              <li>2017 – 2019</li>
            </ul>
            <ul>
              <li>
                <strong>College</strong>
              </li>
              <li>Bachelor of Science in Information Technology</li>
              <li>
                Major in information Management Bestlink College of the
                Philippines{" "}
              </li>
              <li>2019 – 2023</li>
            </ul> 
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  { title: "Web Design", icon: webIcon },
  { title: "Software", icon: softwareIcon },
  { title: "Application", icon: appIcon },
];

function ServiceCards() {
  return (
    <div className="cards-container">
      {services.map((item, i) => (
        <div className="card" key={i}>
          <img src={item.icon} className="card-icon" alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
