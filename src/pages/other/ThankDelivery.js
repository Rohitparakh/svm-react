import PropTypes from "prop-types";
import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ReactGa from 'react-ga';

const ThankDelivery = ({ location }) => {

//For Google Analytics
useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
});

  const { pathname } = location;
  const [search,setSearch]=useState('');

  const searchHandler=(e)=>{
  setSearch(e.target.value)
  }
  return (
    <Fragment>
      <MetaTags>
        <title>SVM LG | Thank You</title>
        <meta
          name="description"
          content="Thank you page of SVM Electronics."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
Thank You      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>😀</h1>
                  <h2>Feedback Received</h2>
                  <p>
                    Your feedback has been recorded by us and we will act on it! Thankyou :)
                  </p>
                  <form className="searchform mb-50">
                    <input
                    value={search}
                    onChange={searchHandler}
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <Link to={process.env.PUBLIC_URL+"/search/"+search}>
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                    </Link>
                  </form>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ThankDelivery.propTypes = {
  location: PropTypes.object
};

export default ThankDelivery;
