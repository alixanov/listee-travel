import React, { useRef, useEffect, useState } from "react";
import {
  Header,
  Navbar,
  Location,
  Activity,
  Popular,
  Shared,
  Testimonials,
  News,
  Footer,
} from "./components";
import "./App.css"; // Стили для кастомного скроллбара

const App = () => {
  const scrollContentRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTop, setStartTop] = useState(0);

  const updateThumbPosition = () => {
    const content = scrollContentRef.current;
    const thumb = scrollThumbRef.current;

    if (content && thumb) {
      const { scrollHeight, clientHeight, scrollTop } = content;
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
      const thumbTop = (scrollTop / scrollHeight) * clientHeight;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${thumbTop}px`;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartTop(parseFloat(window.getComputedStyle(scrollThumbRef.current).top));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const content = scrollContentRef.current;
    const thumb = scrollThumbRef.current;
    const deltaY = e.clientY - startY;
    const thumbHeight = thumb.offsetHeight;
    const contentHeight = content.scrollHeight - content.clientHeight;

    // Перемещаем бегунок
    const newTop = Math.min(Math.max(startTop + deltaY, 0), content.clientHeight - thumbHeight);
    thumb.style.top = `${newTop}px`;

    // Соответственно прокручиваем контент
    content.scrollTop = (newTop / content.clientHeight) * contentHeight;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const content = scrollContentRef.current;

    // Слушаем скролл и обновляем бегунок
    content.addEventListener("scroll", updateThumbPosition);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Обновляем положение бегунка при загрузке
    updateThumbPosition();

    return () => {
      content.removeEventListener("scroll", updateThumbPosition);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, startTop]);

  return (
    <div className="scroll-container">
      {/* Прокручиваемый контент */}
      <div className="scroll-content" ref={scrollContentRef}>
        <div className="title__container">
          <Navbar />
          <Header />
        </div>
        <div className="app__container">
          <Location />
          <Activity />
          <Popular />
          <Shared />
          <Testimonials />
        </div>
        <News />
        <Footer />
      </div>

      {/* Кастомный скроллбар */}
      <div className="scroll-bar">
        <div
          className="scroll-thumb"
          ref={scrollThumbRef}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default App;
