import ContactDevCards from './ContactDevCards';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';

export default function ContactUs() { 

  return (
    <>
      <div className="contact-us-banner padding">
        <div className="container">
          <div className="text-center py-5">
            <h2>Contact Us</h2>
            <p>Got something you want to talk about? Contact us or email us and we promise to get back to you as soon as we can.</p>
          </div>
        </div>
      </div>

      <div className="text-center p-4" >
        <h3>Help / Support</h3>
        <p>For all things technical and app-related. Send us an email:
          <a href='mailto:pawster.app@gmail.com?subject=Pawster App - Technical Concern' className="m-2">
            <FontAwesomeIcon icon={faEnvelope}>
            </FontAwesomeIcon>
          </a>
        </p>
      </div>

      <ContactDevCards />

      <section className="section pb-5">
        <div className="container">
          <div className="text-center p-4">
            <h3>Questions or Concerns</h3>
            <p>Any general questions about the website or topics/concerns you'd like for the Pawster team to address, please feel free to let us know using the form below. We appreciate your feedback!</p>
          </div>
          
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <ContactForm /> 
                </div>

                <div className="col-md-6 border-start">
                  <h6 className="main-heading">Headquaters</h6>
                  <hr />
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.866474495898!2d-73.94411554933569!3d40.74296354355667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592c26359e19%3A0x17661f3fc4273c31!2s47-10%20Austell%20Pl%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1668983117259!5m2!1sen!2sus" width="100%" height="auto" style={{ border: "0" }}   allowFullScreen="" loading="lazy" title="Headquaters-map"></iframe> 
                  <div className="text-center p-4">
                  <p>47-10 Austell Pl, 2nd floor</p>
                  <p>Long Island City, NY 11101</p>
                  <p>PH#: (123) 456-7890</p>
                  </div> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

