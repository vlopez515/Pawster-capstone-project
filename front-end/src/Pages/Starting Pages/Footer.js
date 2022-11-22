import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
    {/* <!-- Footer w. 3 columns --> */}
    <footer className="container-fluid text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Contact Us</h3>
                        <br />
                        <h5>
                            47-10 Austell Pl, 2nd floor <br/> Long Island City, NY 11101 <br/>PH#: (123) 456-7890
                        </h5>
                    </div>
                    <div className="col-sm-4">
                        <h3>Connect</h3>
                        <br />
                        <a href="https://www.facebook.com/" className="socialMedia">
                            <FontAwesomeIcon icon={faFacebook} href="#"/>
                        </a>
                        <a href="https://twitter.com/?lang=en" className="socialMedia">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/feed/" className="socialMedia">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/" className="socialMedia">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.instagram.com/" className="socialMedia">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <img alt='app-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Stereogram_Tut_Random_Dot_Shark.png/400px-Stereogram_Tut_Random_Dot_Shark.png" className="icon" />
                    </div>
                </div>

            </footer>
    </>
  )
}

