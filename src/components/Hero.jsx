import { useEffect } from "react";
import TypingText from "./TypingText";
import "../style/hero.css";
import hand from "../assets/images/HandShake.png";
import profile from "../assets/images/profile.png";
import MessageBox from "./MessageBox";
import { motion, useAnimation } from "framer-motion";
import resume from "../../public/files/Charles_Palencia_Resume.pdf";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // 1. Rotate on mount
      await controls.start({
        rotate: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      // 2. Infinite bounce
      controls.start({
        y: [0, -12, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }

    sequence();
  }, [controls]);

  return (
    <section className="hero">
      <motion.div className="hand-wrapper">
        <motion.div
          initial={{ rotate: -180 }}
          animate={controls}
          className="circle-bg"
        >
          <div className="topline"></div>
          <div className="bottomline"></div>
          <div className="circleline"></div>
          <div className="circlelinelast"></div>
        </motion.div>
        <MessageBox
          direction="to-left"
          message="Download My Resume Here!"
          onClick={() => {
            window.open(resume, "_blank");
          }}
          otherStyles={{
            top: "0px",
            left: "-160px",
            width: "170px",
          }}
        />
        <MessageBox
          message="Summon me on your company"
          direction="to-right"
          onClick={() => {}}
          otherStyles={{
            bottom: "20px",
            right: "-210px",
            width: "205px",
          }}
        />
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="profile-message-border"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2.2928 21.292L2.28337 21.3026C1.97175 21.6227 1.91001 22.1115 2.1337 22.4995C2.35966 22.8914 2.82058 23.0828 3.25769 22.9662L9.05302 21.4208C10.1339 21.7963 11.2942 22 12.5 22C18.299 22 23 17.299 23 11.5C23 5.70101 18.299 1 12.5 1C6.70103 1 2.00002 5.70101 2.00002 11.5C2.00002 13.6029 2.61921 15.5638 3.6852 17.2072C3.65453 17.5251 3.60229 17.8896 3.51944 18.3039C3.28993 19.4515 2.95112 20.2289 2.68837 20.7019C2.55663 20.939 2.44292 21.1015 2.36973 21.1972C2.3331 21.2451 2.30653 21.2764 2.2928 21.292Z"
                fill="blue"
              ></path>{" "}
            </g>
          </svg>
        </motion.div>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="profile-message"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2.2928 21.292L2.28337 21.3026C1.97175 21.6227 1.91001 22.1115 2.1337 22.4995C2.35966 22.8914 2.82058 23.0828 3.25769 22.9662L9.05302 21.4208C10.1339 21.7963 11.2942 22 12.5 22C18.299 22 23 17.299 23 11.5C23 5.70101 18.299 1 12.5 1C6.70103 1 2.00002 5.70101 2.00002 11.5C2.00002 13.6029 2.61921 15.5638 3.6852 17.2072C3.65453 17.5251 3.60229 17.8896 3.51944 18.3039C3.28993 19.4515 2.95112 20.2289 2.68837 20.7019C2.55663 20.939 2.44292 21.1015 2.36973 21.1972C2.3331 21.2451 2.30653 21.2764 2.2928 21.292Z"
                fill="white"
              ></path>{" "}
            </g>
          </svg>
        </motion.div>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="profile-message-container"
        >
          <img src={profile} style={{ zIndex: 0 }} />
        </motion.div>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="profile-message"
        >
          <img src={hand} alt="hand waving hi" className="hand" />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        I’m Charles Palencia
      </motion.h1>
      <div className="typing-container">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="default-typing"
        >
          And I'm a
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <TypingText />
        </motion.h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        I build and modernize production-ready web applications used by real
        businesses.
      </motion.p>
    </section>
  );
}
//pag gagayahan https://preview.themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/full_screen_preview/31542002
