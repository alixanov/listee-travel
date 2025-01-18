import React from 'react';
import './testimonials.css';
import ellipse4 from '../../assets/Ellipse 4.png';
import ellipse5 from '../../assets/Ellipse 5.png';
import ellipse6 from '../../assets/Ellipse 6.png';
import ellipse7 from '../../assets/Ellipse 7.png';
import ellipse8 from '../../assets/Ellipse 8.png';
import ellipse9 from '../../assets/Ellipse 9.png';


const Testimonials = () => {
     return (
          <div className="testimonials__container">
               <span>Review & Testimonials</span>
               <p>Top Reviews for eTour</p>
               <h4>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
               </h4>
               <div className="testimonials__card">
                    <div className="testimonials__quote">
                         <span className="quote__icon">“</span>
                         <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s......
                         </p>
                    </div>
                  
               </div>
               <div className="testimonials__avatars">
                    <img src={ellipse4} alt="Avatar 4" />
                    <img src={ellipse5} alt="Avatar 5" />
                    <img src={ellipse6} alt="Avatar 6" />
                    <img src={ellipse7} alt="Avatar 7" />
                    <div className="testimonials__avatar__comment">
                         <p>Scarlett Thomas</p>
                         <span>Singapore</span>
                    </div>
                    <img src={ellipse8} alt="Avatar 8" />
                    <img src={ellipse9} alt="Avatar 9" />
               </div>
          </div>
     );
};

export default Testimonials;
