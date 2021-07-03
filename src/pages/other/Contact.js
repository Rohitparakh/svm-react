import PropTypes from "prop-types";
import React, { useEffect, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import ReactGa from 'react-ga';
const Contact = ({ location }) => {
  
  //For Google Analytics
  useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });
  
  const { pathname } = location;

const onSubmit=(e)=>{
  e.preventDefault()
  var url = 'https://script.google.com/macros/s/AKfycbxiQnQI8uC51Il87pKhwK9sj8bFzvZS85jGSBaf_nkhbBpCBJE/exec'
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let subject=document.getElementById('subject').value;
  let message=document.getElementById('message').value;
  
var xhr = new XMLHttpRequest();
xhr.open('GET', `${url}?Name=${name}&Email=${email}&Subject=${subject}&Message=${message}`);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(name,email)
        document.getElementById('formMessage').style.marginBottom="-26px";
        document.getElementById('formMessage').style.paddingTop="5px";
        document.getElementById('formMessage').innerHTML="Form Submitted"
        document.getElementById('formMessage').classList.add('active')
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('subject').value="";
        document.getElementById('message').value="";
    }
    else {
        alert('Request failed. Please try again later. Returned status of ' + xhr.status);
    }
};
xhr.send();
}
return (
    <Fragment>
      <MetaTags>
        <title>SVM LG | Contact</title>
        <meta
          name="description"
          content="Contact of SVM Electronics."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-25 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                  <a target="_blank"  rel="noopener noreferrer" href="tel:7299005580">
                     <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    </a>
                    <div className="contact-info-dec">
                      <a target="_blank"  rel="noopener noreferrer" href="tel:7299005580"><p>+91 72990 05580</p></a>
                      <a target="_blank"  rel="noopener noreferrer" href="tel:04442120038"><p>+044 4212 0038/39/40.</p></a>
                    </div>
                  </div>
                  <a target="_blank"  rel="noopener noreferrer" href="https://wa.me/7299005580"><div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+91 72990 05580</p>
                      {/* <a target="_blank"  rel="noopener noreferrer" href="tel:04442120038"><p>+044 4212 0038/39/40.</p></a> */}
                    </div>
                  </div>
                  </a>
                  <div className="single-contact-info">
                  <a target="_blank"  rel="noopener noreferrer" href="mailto:lg.svmelectronics@gmail.com">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    </a>
                    <div className="contact-info-dec">
                      <p>
                        <a target="_blank"  rel="noopener noreferrer" href="mailto:lg.svmelectronics@gmail.com">lg.svmelectronics@gmail.com</a>
                      </p>
                      <p>
                        <a target="_blank"  rel="noopener noreferrer" href="//svmlg.com">svmlg.com</a>
                      </p>
                    </div>
                  </div>
                 <a target="_blank"  rel="noopener noreferrer" href="https://goo.gl/maps/JyEiY7J7B5MxQ1mS6" >
                    <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>#95, T.T.K. Road, </p>
                      <p>Alwarpet, Chennai-10.</p>
                    </div>
                  </div>
                  </a>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a target="_blank"  rel="noopener noreferrer" href="//facebook.com/lgbestshopalwarpet">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank"  rel="noopener noreferrer" href="//instagram.com/lgexclusivestore">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form id="contactForm" onSubmit={onSubmit} className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input id="name" name="Name" placeholder="Name*" type="text" required />
                      </div>
                      <div className="col-lg-6">
                        <input id="email" name="Email" placeholder="Email*" type="email" required />
                      </div>
                      <div className="col-lg-12">
                        <input
                        id="subject"
                          name="Subject"
                          placeholder="Subject*"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                        id="message"
                          name="Message"
                          placeholder="Your Message*"
                          defaultValue={""}
                          required
                        />
                        <button id="submitForm" className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p id="formMessage" className="form-message"></p>
                </div>
              </div>
            </div>
            <div id="contactMap" className="contact-map mb-10">
              {/* <LocationMap latitude="13.035459604072765" longitude="80.25480940678713" /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.1993123895505!2d80.25441612801664!3d13.035287500595485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4ed1821fb%3A0xca2d108bed18c827!2sLG%20Best%20Shop%2C%20Alwarpet!5e0!3m2!1sen!2sin!4v1610124568002!5m2!1sen!2sin&amp;z=15" width="100%" height="100%" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"/>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
