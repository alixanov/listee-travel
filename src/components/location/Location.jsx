import React from 'react';
import './location.css';
import malaysia from '../../assets/Group 80.png';
import dubai from '../../assets/Group 81.png';
import greece from '../../assets/Group 82.png';
import singapore from '../../assets/group83.png';

const Location = () => {
  return (
    <div className="location__container">
      <span>Choose your</span>
      <p>DESTINATION</p>
      <div className="location__cards">
        <div className="location__card large active">
          <img src={malaysia} alt="Malaysia" className='malaysia' />
          <div className="location__overlay">
            <h3>Malaysia</h3>
            <button>16 TOURS</button>
          </div>
        </div>
        <div className="location__card">
          <img src={dubai} alt="Dubai" />
          <div className="location__overlay">
            <h3>Dubai</h3>
            <button>16 TOURS</button>
          </div>
        </div>
        <div className="location__card">
          <img src={greece} alt="Greece" />
          <div className="location__overlay">
            <h3>Greece</h3>
            <button>16 TOURS</button>
          </div>
        </div>
        <div className="location__card">
          <img src={singapore} alt="Singapore" />
          <div className="location__overlay">
            <h3>Singapore</h3>
            <button>16 TOURS</button>
          </div>
        </div>
      </div>
      <button className="location__viewMore">VIEW MORE</button>
    </div>
  );
};

export default Location;
