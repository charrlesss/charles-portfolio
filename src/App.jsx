import { useRef, useState, useEffect } from "react";
import Bubbles from "./components/Bubbles";
import Hero from "./components/Hero";
import TypingText from "./components/TypingText";
import "./style/background.css";
import submarine from "./assets/images/submarine.png";
import Submarine from "./components/Submarine";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

function App() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [disableActivity, setDisableActivity] = useState(0);

  const sections = ["Resume", "Experience", "About Me"];

  // Optional: handle mouse wheel for horizontal slide
  const isScrolling = useRef(false);
  const handleWheel = (e) => {
    if (disableActivity) return;
    if (isScrolling.current) return;

    isScrolling.current = true;
    let newIndex = currentSection;
    if (e.deltaY > 0)
      newIndex = Math.min(currentSection + 1, sections.length - 1);
    else if (e.deltaY < 0) newIndex = Math.max(currentSection - 1, 0);

    if (newIndex !== currentSection) scrollToSection(newIndex);

    setTimeout(() => (isScrolling.current = false), 500);
  };

  // const handleWheel = (e) => {
  //   if (!containerRef.current || isScrolling.current) return;

  //   isScrolling.current = true;

  //   let newCount = currentSection;

  //   if (e.deltaY > 0) {
  //     newCount = Math.min(
  //       currentSection + 1,
  //       containerRef.current.children.length - 1
  //     );
  //   } else if (e.deltaY < 0) {
  //     newCount = Math.max(currentSection - 1, 0);
  //   }

  //   if (newCount !== currentSection) {
  //     setCurrentSection(newCount);

  //     // containerRef.current.children[newCount].scrollIntoView({
  //     //   behavior: "smooth",
  //     //   inline: "start",
  //     // });

  //     containerRef.current.style.transform = `translateX(-${
  //       newCount * window.innerWidth
  //     }px)`;
  //   }

  //   setTimeout(() => {
  //     isScrolling.current = false;
  //   }, 500);
  // };

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Mouse / touch start
  const onDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    scrollStart.current = currentSection * window.innerWidth;
  };

  // Mouse / touch move
  const onDragMove = (e) => {
    if (!isDragging.current) return;

    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const delta = startX.current - x;

    containerRef.current.style.transform = `translateX(${
      -scrollStart.current - delta
    }px)`;
  };

  // Mouse / touch end
  const onDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const xEnd =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const delta = startX.current - xEnd;

    let newSection = currentSection;

    if (delta > 50) {
      // Dragged left → next section
      newSection = Math.min(
        currentSection + 1,
        containerRef.current.children.length - 1
      );
    } else if (delta < -50) {
      // Dragged right → previous section
      newSection = Math.max(currentSection - 1, 0);
    }

    setCurrentSection(newSection);

    containerRef.current.style.transition = "transform 0.6s ease";
    containerRef.current.style.transform = `translateX(-${
      newSection * window.innerWidth
    }px)`;

    // Remove transition after animation for smooth dragging next time
    setTimeout(() => {
      containerRef.current.style.transition = "";
    }, 600);
  };

  // Attach events
  useEffect(() => {
    if (disableActivity) return;

    const container = containerRef.current;

    container.addEventListener("mousedown", onDragStart);
    container.addEventListener("mousemove", onDragMove);
    container.addEventListener("mouseup", onDragEnd);
    container.addEventListener("mouseleave", onDragEnd);

    container.addEventListener("touchstart", onDragStart);
    container.addEventListener("touchmove", onDragMove);
    container.addEventListener("touchend", onDragEnd);

    return () => {
      container.removeEventListener("mousedown", onDragStart);
      container.removeEventListener("mousemove", onDragMove);
      container.removeEventListener("mouseup", onDragEnd);
      container.removeEventListener("mouseleave", onDragEnd);

      container.removeEventListener("touchstart", onDragStart);
      container.removeEventListener("touchmove", onDragMove);
      container.removeEventListener("touchend", onDragEnd);
    };
  }, [currentSection, disableActivity]);

  const scrollToSection = (index) => {
    setCurrentSection(index);
    containerRef.current.style.transition = "transform 0.6s ease";
    containerRef.current.style.transform = `translateX(-${
      index * window.innerWidth
    }px)`;

    setTimeout(() => {
      containerRef.current.style.transition = "";
    }, 600);
  };

  return (
    <>
      <Navigation
        sections={sections}
        currentSection={currentSection}
        onNavigate={scrollToSection}
      />
      <div ref={containerRef} className="horizontal-page" onWheel={handleWheel}>
        <section className="section bg">
          <Bubbles />
          <Hero />
        </section>
        <section className="section bg">
          <Bubbles />
          <Experience setDisableActivity={setDisableActivity} />
        </section>
        <section className="section bg">
          <Bubbles />
          <AboutMe setDisableActivity={setDisableActivity}  />
        </section>
      </div>
    </>
  );
}

export default App;
