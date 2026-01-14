import React from "react";
import "../style/navigation.css";

function Navigation({ sections, currentSection, onNavigate }) {
  console.log(sections);
  return (
    <div className="section-nav">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`nav-dot ${currentSection === index ? "active" : ""}`}
          onClick={() => onNavigate(index)}
          aria-label={`Go to ${section}`}
        >
          {section}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
