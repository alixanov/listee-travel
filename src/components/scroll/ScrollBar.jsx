import React, { useRef, useEffect } from "react";
import "./scrol-bar.css"; // Подключаем стили для кастомного скролла

const CustomScrollbar = ({ children }) => {
     const scrollContentRef = useRef(null);
     const scrollThumbRef = useRef(null);

     const updateThumbPosition = () => {
          const content = scrollContentRef.current;
          const thumb = scrollThumbRef.current;

          if (content && thumb) {
               const { scrollHeight, offsetHeight, scrollTop } = content;
               const thumbHeight = (offsetHeight / scrollHeight) * offsetHeight;
               const thumbTop = (scrollTop / scrollHeight) * offsetHeight;

               thumb.style.height = `${thumbHeight}px`;
               thumb.style.top = `${thumbTop}px`;
          }
     };

     useEffect(() => {
          const content = scrollContentRef.current;

          // Слушаем скролл и обновляем бегунок
          content.addEventListener("scroll", updateThumbPosition);

          // Обновляем положение бегунка при загрузке
          updateThumbPosition();

          return () => {
               content.removeEventListener("scroll", updateThumbPosition);
          };
     }, []);

     return (
          <div className="scroll-container">
               <div className="scroll-content" ref={scrollContentRef}>
                    {children}
               </div>
               <div className="scroll-bar">
                    <div className="scroll-thumb" ref={scrollThumbRef}></div>
               </div>
          </div>
     );
};

export default CustomScrollbar;
