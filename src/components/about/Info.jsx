import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-code about__icon" ></i>
            <h3 className="about__title">Languages</h3>
            <span className="about__subtitle">C/C++ Python JS(Node) Dart </span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Domain</h3>
            <span className="about__subtitle">Web Android Blockchain MachineLearning</span>
        </div>
        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info