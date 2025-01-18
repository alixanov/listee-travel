import React from 'react';
import './news.css';
import building from '../../assets/pngwing.com 1.png';
import right from '../../assets/right.png';

const News = () => {
     return (
          <div className="news__container">
               <div className="news__build__img">
                    <img src={building} alt="Building" />
               </div>
               <div className="news__card">
                    <p>Get Our Monthly Newsletter</p>
                    <span>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                         make a type specimen book.
                    </span>
                    <div className="news__input">
                         <input type="text" placeholder="Input your email address in here" />
                         <button>
                              <img src={right} alt="Arrow Icon" />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default News;
