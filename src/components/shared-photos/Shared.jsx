import React from 'react'
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"
import "./shared.css"


const Shared = () => {
  return (
       <div className="shared__container">
            <span>Best Traveler’s</span>
            <p>Shared photos</p>
            <h4>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,            </h4>
            <div className="shared__card">
                 <img src={one} alt="" />
                 <img src={two} alt="" />
                 <img src={three} alt="" />
                 <img src={four} alt="" />
                 <img src={five} alt="" />
                 <img src={six} alt="" />
      </div>
    </div>
  )
}

export default Shared
