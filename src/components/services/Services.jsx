import React, { useState } from 'react';
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=> {
        setToggleState(index);
    }
  return (
    <section className="services section" id = "services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
   
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Software <br/> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Software Developer</h3>
                        <p className="services__modal-description">
                            Service with software creation, might be Desktop Software. Providing quality work to
                            clients and peers.
                        </p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Software Development.</p>
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create independent project.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Backend <br/> Developer</h3>
                </div>

                <span className="services__button"onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Backend Developer</h3>
                        <p className="services__modal-description">
                            Service with my efficient BackEnd logics and ideas. Providing quality work to
                            clients and peers.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">BackEnd Development</p>
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create independent project.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can understand scenarios.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">WebSite <br/> Developer</h3>
                </div>

                <span className="services__button"onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">WebSite Developer</h3>
                        <p className="services__modal-description">
                            Service with my Website Development Ideas and Skill. Which will make your brand rise.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the Basic FrontEnd.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Server Side Development</p>
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create robust and standalone sites.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services