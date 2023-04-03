import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Abhishek</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/abhishek-gupta-a1a44a203/" className="footer__social-link" target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/abhi18_01?t=Hy5SeU_kN3LhwLUV31GLKw&s=08" className="footer__social-link" target='_blank'>
                        <i class="uil uil-twitter"></i>
                    </a>
                    <a href="https://instagram.com/abhishek.gupta0118?igshid=MTIzZWQxMDU=" className="footer__social-link" target='_blank'>
                        <i class="uil uil-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Abhishek Gupta. All rights reserved</span>

            </div>
        </footer>
    )
}

export default Footer