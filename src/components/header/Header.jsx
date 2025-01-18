import React from 'react'
import "./header.css"
import location from "../../assets/Vector.png"
import date from "../../assets/Frame.png"
import search from "../../assets/search.png"

const Header = () => {
  return (
    <div className='header__container'>
      <div className="header__left">
        <h3>Explorer and Travel</h3>
        <h1>
          Let’s Go Now
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className="header__left__card">
          <div className="header__location">
            <img src={location} alt="" />
            <div className="header__location__txt">
              <span>Location</span>
              <p>Thailand</p>
            </div>
          </div>
          <div className="header__location">
            <img src={date} alt="" />
            <div className="header__location__txt">
              <span>Date</span>
              <p>13 May, 2023</p>
            </div>
          </div>
          <button><img src={ search} alt="" /></button>
        </div>
      </div>
      <div className='header__right'>

      </div>
    </div>
  )
}

export default Header
