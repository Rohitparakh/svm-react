import PropTypes from "prop-types";
import React, { Fragment , useState , useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import {Link} from 'react-router-dom';
import ReactGa from 'react-ga';
const Product = ({ location, product }) => {
  
  //For Google Analytics
  useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });

  const { pathname } = location;
  const [propModel,setPropModel]=useState(product?product.model:null);
  let currentModel=propModel;
  const setModel=(model)=>{
  setPropModel(model);
}

useEffect(() => {
currentModel=propModel
}, [propModel])


  return (
    <Fragment>
      <MetaTags>
        <title>SVM LG | Product Page</title>
        <meta
          name="description"
          content="Product page of SVM LG."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/shop"}>
       Shop
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        View Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
{!product?
<>
  <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-attention"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No product found <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        View Other Products
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <br/>
                </>
              :<>
        <ProductImageDescription
          spaceTopClass="pt-100"
          // spaceBottomClass="pb-100"
          product={product}
          productFullDesc={product.fullDescription}
          propModel={propModel}
          setModel={setModel}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
          product={product}
          currentModel={currentModel}
        /> */}

        {/* related product slider */}
        <RelatedProductSlider
        id={product.id}
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /></>}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      single => single.id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(Product);
