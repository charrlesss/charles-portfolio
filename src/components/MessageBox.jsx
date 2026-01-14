import React from "react";
import "../style/messagebox.css";
import profile from "../assets/images/profile.png";
import { motion } from "motion/react";

const MessageBox = ({
  isMessage = false,
  direction,
  message,
  onClick,
  boxStyle,
  otherStyles,
}) => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className={`message-box ${direction}`}
      style={{
        height: "30px",
        position: "absolute",
        backgroundColor: "transparent",
        ...otherStyles,
      }}
    >
      <div className="box" onClick={onClick} style={boxStyle}>
        {isMessage ? (
          <img src={profile} alt="profile" />
        ) : (
          <div className="message">{message}</div>
        )}
      </div>
      <div className={`box-hook ${direction}`}></div>
      <div className={`box-hook ${direction}-line`}></div>
    </motion.div>
  );
};

export default MessageBox;
