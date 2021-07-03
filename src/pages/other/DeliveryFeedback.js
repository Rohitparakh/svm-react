import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import{Redirect, useParams, useHistory} from 'react-router-dom'
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import ReactGa from 'react-ga';
const DeliveryFeedback = ({ location }) => {
  
  //For Google Analytics
  useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });
  
  let history = useHistory();

  const { pathname } = location;
  const params=useParams();
  const num=params.num;
  
const onSubmit=(e)=>{
  e.preventDefault()
  var url = 'https://script.google.com/macros/s/AKfycbwWHDLattFzTpNBf2fi6jFebbTDFdQgidqDGfo/exec'
  let dPhone=document.getElementById('dPhone').value;
  let dMessage=document.getElementById('dMessage').value;
  
var xhr = new XMLHttpRequest();
xhr.open('GET', `${url}?&Phone=${dPhone}&Message=${dMessage}`);
xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById('formMessage').innerHTML="Form Submitted"
        document.getElementById('formMessage').classList.add('active')
document.getElementById('dMessage').value="";
history.replace('/thank-delivery')

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
        <title>SVM LG | Delivery Feedback</title>
        <meta
          name="description"
          content="Delivery Feedback of SVM Electronics."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Delivery Feedback
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-25 pb-100">
          <div className="container">
            <div className="custom-row-2">
               <div className="col-12">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                   <center>
                        <h2>Give your Delivery Feedback</h2>
                    </center>
                  </div>
                  <form id="deliveryForm" onSubmit={onSubmit} className="contact-form-style">
                    <div className="row">
                      {/* <div className="col-lg-6">
                        <input id="dname" name="dName" placeholder="Name*" type="text" hidden required />
                      </div>
                      <div className="col-lg-6">
                        <input id="demail" name="dEmail" placeholder="Email*" type="email" hidden required />
                      </div> */}
                      <div className="col-lg-12">
                        <input hidden 
                        id="dPhone"
                          name="dPhone"
                          placeholder="Subject*"
                          type="number"
                          required
                          defaultValue={num}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                        id="dMessage"
                          name="dMessage"
                          placeholder="Your Feedback*"
                          defaultValue={""}
                          required
                        />
                        <button id="submitDeliveryForm" className="submit" type="submit" value="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p id="formMessage" className="form-message"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

DeliveryFeedback.propTypes = {
  location: PropTypes.object
};

export default DeliveryFeedback;
