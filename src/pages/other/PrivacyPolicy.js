import PropTypes from "prop-types";
import React, { useEffect, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ReactGa from 'react-ga';

const PrivacyPolicy = ({ location }) => {

//For Google Analytics
useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
});

const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
      <title>LG | Privacy Policy | SVM Electronics</title>
        <meta
          name="description"
          content="Privacy Policy page of SVM Electronics( LG )."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
      Privacy Policy
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

</LayoutOne>
</Fragment>);
};
PrivacyPolicy.propTypes = {
    location: PropTypes.object
  };
export default PrivacyPolicy