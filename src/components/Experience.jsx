import { useState } from "react";
import "../style/experience.css";
import csslogo from "../assets/images/csslogo.png";
import flutterlogpng from "../assets/images/flutterlogpng.png";
import htmllogo from "../assets/images/htmllogo.png";
import jslogo from "../assets/images/jslogo.png";
import netlogo from "../assets/images/NET.png";
import nextlogo from "../assets/images/nextlogo.png";
import nodelogo from "../assets/images/nodelogo.png";
import reactlogo from "../assets/images/reactlogo.png";
import tslogo from "../assets/images/tslogo.png";
import VBNETLogo from "../assets/images/VB.NETLogo.png";

import mongodblogo from "../assets/images/mongodblogo.png";
import mysql from "../assets/images/mysql.png";
import sql_server from "../assets/images/sql_server.jpg";

import crystalreportlogo from "../assets/images/crystalreportlogo.png";
import jasper_report from "../assets/images/jasper_report.jpg";
import pdfkit_logo from "../assets/images/pdfkit-logo.png";

import Hostinger_Logo from "../assets/images/Hostinger_Logo.png";

import { motion, AnimatePresence } from "framer-motion";

// animations.ts
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const waveItem = {
  animate: (i) => ({
    y: [0, -10, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.15,
    },
  }),
};

export default function Experience({ setDisableActivity }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="experience-grid"
      >
        <GlassCard
          title="Internship – Software Developer"
          company="Taters Enterprises, Inc. (Makati City)"
          date="Aug 26 – Dec 12, 2022"
          onClick={() => {
            setActiveCard("taters");
            const navigation =
              document.getElementsByClassName("section-nav")[0];
            if (navigation) {
              console.log(navigation);
              navigation.style.zIndex = "0";
            }
            setDisableActivity(true);
          }}
        >
          <ul>
            <li>Developed e-commerce web app (I Love Taters)</li>
            <li>Designed web pages and built APIs</li>
            <li>Collaborated with senior developers</li>
          </ul>
        </GlassCard>
        <GlassCard
          onClick={() => {
            setActiveCard("exxel");
            const navigation =
              document.getElementsByClassName("section-nav")[0];
            if (navigation) {
              console.log(navigation);
              navigation.style.zIndex = "0";
            }
            setDisableActivity(true);
          }}
          title="Software Developer"
          company="Exxel Prime Int’l Trading Inc. (Caloocan City)"
          date="Mar 17 – Jun 17, 2023"
        >
          <ul>
            <li>Inventory & reporting system</li>
            <li>Implemented Jasper reports</li>
            <li>Optimized queries for performance</li>
          </ul>
        </GlassCard>
        <GlassCard
          onClick={() => {
            setActiveCard("upward");
            const navigation =
              document.getElementsByClassName("section-nav")[0];
            if (navigation) {
              console.log(navigation);
              navigation.style.zIndex = "0";
            }
            setDisableActivity(true);
          }}
          title="Solo Full Stack Developer"
          company="Upward Management Insurance Services Inc."
          date="Sept 13, 2023 – October 08, 2025"
        >
          <ul>
            <li>Solo developer modernizing legacy VB.NET system</li>
            <li>Reverse-engineered business logic</li>
            <li>Delivered production system used company-wide</li>
          </ul>
        </GlassCard>
      </motion.section>
      <motion.div className="main-tech-container">
        <h1>Technology I Use</h1>
        <h2>Coding</h2>
        <div className="tech-section">
          <div className="img-container">
            {[
              htmllogo,
              csslogo,
              jslogo,
              reactlogo,
              nodelogo,
              nextlogo,
              tslogo,
              flutterlogpng,
              netlogo,
              VBNETLogo,
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="tech-logo"
                custom={index}
                variants={waveItem}
                animate="animate"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
        <h2>Database</h2>
        <div className="tech-section">
          <div className="img-container">
            {[mongodblogo, mysql, sql_server].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="tech-logo"
                custom={index}
                variants={waveItem}
                animate="animate"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
        <h2>Reporting</h2>
        <div className="tech-section">
          <div className="img-container">
            {[crystalreportlogo, jasper_report, pdfkit_logo].map(
              (logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt="tech-logo"
                  custom={index}
                  variants={waveItem}
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                />
              )
            )}
          </div>
        </div>
        <h2>Deployment</h2>
        <div className="tech-section">
          <div className="img-container">
            {[Hostinger_Logo].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="tech-logo"
                custom={index}
                variants={waveItem}
                animate="animate"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="exp-description"
      >
        I am a flexible and hardworking software developer with experience in
        full-stack web development. I am open to learning new technologies even
        if I am not fully familiar with them, and I can learn quickly through
        practice and research. I am passionate about programming, enjoy solving
        problems, and always aim to work in a professional and responsible way.
      </motion.p>
      <AnimatePresence>
        {activeCard && (
          <ExperienceModal
            activeCard={activeCard}
            onClose={() => {
              setActiveCard(null);
              const navigation =
                document.getElementsByClassName("section-nav")[0];
              if (navigation) {
                console.log(navigation);
                navigation.style.zIndex = "1";
              }

              setDisableActivity(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function GlassCard({ title, company, date, children, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="glass-card"
    >
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="date">{date}</p>
      <div className="content">{children}</div>
      <div className="view-details">
        <button onClick={onClick}>View Full Details</button>
      </div>
    </motion.div>
  );
}
function ExperienceModal({ activeCard, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-card"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {activeCard === "taters" && <TatersDetails />}
        {activeCard === "exxel" && <ExxelDetails />}
        {activeCard === "upward" && <UpwardDetails />}
      </motion.div>
    </motion.div>
  );
}
function TatersDetails() {
  return (
    <div>
      <h2>Internship – Software Developer</h2>
      <h2>Taters Enterprises, Inc. (Makati City)</h2>
      <h2>Aug 26 – Dec 12, 2022</h2>
      <ul>
        <li>
          <strong>Project:</strong> I Love Taters (Online Store){" "}
        </li>
        <li>
          <strong>Website:</strong> www.ilovetaters.com{" "}
        </li>
        <li>
          <strong>Platform:</strong> Web Application{" "}
        </li>
        <li>
          <strong>Technologies:</strong> ReactJS, TypeScript, Redux, PHP
          (CodeIgniter){" "}
        </li>
        <li>
          <strong>Description:</strong> Is a web-based e-commerce platform
          developed using modern technologies to provide a seamless and
          efficient shopping experience for customers.{" "}
        </li>
        <li>
          <strong>Role:</strong> Full Stack
        </li>
        <li>
          <strong>Duties & Responsibilities:</strong>
          <ul>
            <li>Designing of web pages</li>
            <li> Building APIs</li>
            <li> Research and Development</li>
            <li>
              {" "}
              Daily and weekly status meeting with senior developer and managers
            </li>
            <li> Ensuring the quality of code implementation and design</li>
            <li> Assisting my senior’s developer</li>
            <li> Performing other related tasks assigned from time to time</li>
            <li> Collabare with the team</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
function ExxelDetails() {
  return (
    <div>
      <h2>Software Developer</h2>
      <h2>Exxel Prime Int’l Trading Inc. (Caloocan City)</h2>
      <h2>Mar 17 – Jun 17, 2023</h2>

      <ul>
        <li>
          <strong>Project:</strong> Company System (localhost)
        </li>
        <li>
          <strong>Platform:</strong> Web Application
        </li>
        <li>
          <strong>Technologies:</strong> Delphi, JS, CSS, JASPER, SQL
        </li>
        <li>
          <strong>Description:</strong> : I worked on a system that streamlined
          inventory management and reporting for a company. It tracked product
          details, generated real-time reports, managed orders, and maintained
          supplier connections, all while integrating with financial systems for
          seamless operations.
        </li>
        <li>
          <strong>Role:</strong> Full Stack
        </li>
        <li>
          <strong>Duties & Responsibilities:</strong>
          <ul>
            <li> Designing of web pages</li>
            <li> Research and Development</li>
            <li> Daily and weekly status meeting with managers</li>
            <li> Collabare with the team</li>
            <li> Implementing Jasper report</li>
            <li>
              I ensured high-quality code implementation and designed efficient
              queries, emphasizing clarity and performance to enhance the
              reliability and effectiveness of the system.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
function UpwardDetails() {
  return (
    <div>
      <h2>Solo Full Stack Developer</h2>
      <h2>Upward Management Insurance Services Inc.</h2>
      <h2>Sept 13, 2023 – October 08, 2025</h2>
      <ul>
        <li>
          <strong>Project:</strong> Company Accounting & Claims System
          <ul>
            <li
              onClick={() => {
                window.open("https://ucsmi.upwardinsurance.net/UCSMI/login");
              }}
            >
              https://ucsmi.upwardinsurance.net/UCSMI/login
            </li>
            <li
              onClick={() => {
                window.open("https://umis.upwardinsurance.net/UMIS/login");
              }}
            >
              https://umis.upwardinsurance.net/UMIS/login
            </li>
            <li
              onClick={() => {
                window.open("https://claims.upwardinsurance.net/CLAIMS/login");
              }}
            >
              https://claims.upwardinsurance.net/CLAIMS/login
            </li>
          </ul>
        </li>
        <li>
          <strong>Platform:</strong> Web Application
        </li>
        <li>
          <strong>Technologies:</strong> React (TypeScript), Node.js
          (TypeScript), MySQL, Workbench, Hostinger, VB.NET (for reverse
          engineering legacy system)
        </li>
        <li>
          <strong>Description:</strong> I worked on a system that streamlined
          inventory management and reporting for a company. It tracked product
          details, generated real-time reports, managed orders, and maintained
          supplier connections, all while integrating with financial systems for
          seamless operations.
        </li>
        <li>
          <strong>Role:</strong> Full Stack
        </li>
        <li>
          <strong>Duties & Responsibilities:</strong>
          <ul>
            <li>
              Solo developer responsible for modernizing a legacy VB.NET + SQL
              desktop system into a full-featured web application.
            </li>
            <li>
              Translated and rebuilt old code by reverse-engineering the desktop
              app and understanding business logic through existing source code
              and minimal guidance from non-technical staff.
            </li>
            <li>
              Rebuilt system modules one by one using modern technologies:
              <ul>
                <li>
                  <strong>Frontend:</strong> React with TypeScript
                </li>
                <li>
                  <strong>Backend:</strong> Node.js with TypeScript
                </li>
                <li>
                  <strong>Database:</strong> MySQL via Workbench
                </li>
                <li>
                  <strong>Hosting:</strong> Hostinger
                </li>
              </ul>
            </li>
            <li>
              Successfully delivered a fully functional production system used
              by the company within a year.
            </li>
            <li>
              Continues to add new features and perform regular system
              maintenance.
            </li>
            <li>
              Overcame challenges including lack of team support, outdated
              documentation, and limited domain knowledge by conducting
              independent research and learning.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
