import React from 'react';
import "./activity.css";
import adventure from "../../assets/Adventure.png";
import camping from "../../assets/Camping.png";
import trekking from "../../assets/Trekking.png";
import offRoad from "../../assets/Off Road.png";
import campFire from "../../assets/Camp Fire.png";
import expiring from "../../assets/Expiring.png";

const activities = [
     {
          img: adventure,
          title: "Adventure",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
     {
          img: camping,
          title: "Camping",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
     {
          img: trekking,
          title: "Trekking",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
     {
          img: offRoad,
          title: "Off Road",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
     {
          img: campFire,
          title: "Camp Fire",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
     {
          img: expiring,
          title: "Expiring",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
     },
];

const Activity = () => {
     return (
          <div className="activity__container">
               <span>Travel by</span>
               <p>Activity</p>
               <h4>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s.
               </h4>
               <div className="activity__grid">
                    {activities.map((activity, index) => (
                         <div className={`activity__card ${index === 0 ? 'active' : ''}`} key={index}>
                              <img src={activity.img} alt={activity.title} />
                              <p>{activity.title}</p>
                              <span>{activity.description}</span>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Activity;
