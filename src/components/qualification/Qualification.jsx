import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            } onClick={()=> toggleTab(1)}
            >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            }onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Project Role
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Govt. Inter College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Backend Development</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 
                            </div>
                        </div>

                     

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Android Development</h3>
                            <span className="qualification__subtitle">RKG - Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Machine Learning</h3>
                            <span className="qualification__subtitle">RKG - Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                     

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.tech</h3>
                            <span className="qualification__subtitle">RKG Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">MediTrade</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">NearMed</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                     
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Android Developer</h3>
                            <span className="qualification__subtitle">Alone</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    

                    


                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification