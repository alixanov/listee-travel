import React from 'react';
import romeItaly from '../../assets/rome-italy.png';
import lahorePakistan from '../../assets/Lahore, pakistan.png';
import singapore from '../../assets/singapore.png';
import './popular.css';

const Popular = () => {
     return (
          <div className="popular__container">
               <span>Popular</span>
               <p>Tour Packages</p>
               <h4>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
               </h4>
               <div className="popular__cards">
                    <div className="popular__card">
                         <img src={romeItaly} alt="Rome, Italy" />
                         <div className="card__details">
                              <div className="popular__card__title">
                                   <p className="card__title">Rome, Italy</p>
                                   <span>10 days trip</span>
                              </div>
                         
                              <p className="card__price">$5.24K</p>
                         </div>
                    </div>
                    <div className="popular__card">
                         <img src={lahorePakistan} alt="Lahore, Pakistan" />
                         <div className="card__details">
                              <div className="popular__card__title">
                                   <p className="card__title">Lahore</p>
                                   <span>6 days trip</span>
                              </div>
                              <p className="card__price">$3.25K</p>
                         </div>
                    </div>
                    <div className="popular__card">
                         <img src={singapore} alt="Singapore" />
                         <div className="card__details">
                              <div className="popular__card__title">
                                   <p className="card__title">Singapore</p>
                                   <span>6 days trip</span>
                           </div>
                                   <p className="card__price">$7.00K</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Popular;
