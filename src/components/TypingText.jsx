import { useEffect, useState } from "react";
import { motion } from "motion/react";
const roles = [
  "Full-Stack Developer",
  "Website Developer",
  "Desktop Developer",
  "Mobile Developer",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setText("");
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="typing"
    >
      {text}
      <span className="cursor">|</span>
    </motion.span>
  );
}
