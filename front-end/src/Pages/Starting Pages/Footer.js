import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const logoSm = require('../../assets/Pawster_small.png')

export default function Footer() {
  return (
    <>
    {/* <!-- Footer w. 3 columns --> */}
    <footer className="container-fluid text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Contact Us</h3>
                        <br />
                        <h6>
                            47-10 Austell Pl, 2nd floor <br/> Long Island City, NY 11101 <br/>PH#: (123) 456-7890
                        </h6>
                    </div>
                    <div className="col-sm-4">
                        <h3>Connect</h3>
                        <br />
                        <a href="https://www.facebook.com/" className="socialMedia" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} href="#"/>
                        </a>
                        <a href="https://twitter.com/?lang=en" className="socialMedia" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/feed/" className="socialMedia" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/" className="socialMedia" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.instagram.com/" className="socialMedia" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <img alt='app-logo' src={logoSm} className="icon" />
                    </div>
                </div>

            </footer>
    </>
  )
}

