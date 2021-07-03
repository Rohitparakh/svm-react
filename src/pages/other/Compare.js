import PropTypes from "prop-types";
import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { deleteFromCompare } from "../../redux/actions/compareActions";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Rating from "../../components/product/sub-components/ProductRating";
import ReactGa from 'react-ga';
const Compare = ({
  location,
  compareItems,
  deleteFromCompare,
  currency
}) => {
   //For Google Analytics
   useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });
  const { pathname } = location;
  const { addToast } = useToasts();

  return (
    <Fragment>
      <MetaTags>
        <title>LG | Compare | SVM Electronics</title>
        <meta
          name="description"
          content="Compare page of SVM ELECTRONICS."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Compare
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="compare-main-area pt-90 pb-100">
          <div className="container">
            {compareItems && compareItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="compare-page-content">
                    <div className="compare-table table-responsive">
                      <table className="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <th className="title-column">Product Info</th>
                            {compareItems.map((compareItem, key) => {                            
                              return (
                                <td className="product-image-title" key={key}>
                                  <div className="compare-remove">
                                    <button
                                      onClick={() =>
                                        deleteFromCompare(compareItem, addToast)
                                      }
                                    >
                                      <i className="pe-7s-trash" />
                                    </button>
                                  </div>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      compareItem.id
                                    }
                                    className="image"
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        process.env.PUBLIC_URL +
                                        compareItem.image[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                  <div className="product-title">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/product/" +
                                        compareItem.id
                                      }
                                    >
                                      {compareItem.name}
                                    </Link>
                                  </div>
                                  <div className="compare-btn">
                                  <Link to={`${process.env.PUBLIC_URL}/product/${compareItem.id}`}>
                                      
                                        View Product
                                      
                                      </Link>
                                    {/* {compareItem.affiliateLink ? (
                                      <a
                                        href={compareItem.affiliateLink}
                                        rel="noopener noreferrer"
                                        target="_blank"  rel="noopener noreferrer"
                                      >
                                        {" "}
                                        Buy now{" "}
                                      </a>
                                    ) : compareItem.variation &&
                                      compareItem.variation.length >= 1 ? (
                                      <Link to={`${process.env.PUBLIC_URL}/product/${compareItem.id}`}>
                                        Select Option 
                                        View Product
                                      </Link>
                                    ) : compareItem.stock &&
                                      compareItem.stock > 0 ? (
                                      <button
                                        onClick={() =>
                                          addToCart(compareItem, addToast)
                                        }
                                        className={
                                          cartItem !== undefined &&
                                          cartItem.quantity > 0
                                            ? "active"
                                            : ""
                                        }
                                        disabled={
                                          cartItem !== undefined &&
                                          cartItem.quantity > 0
                                        }
                                        title={
                                          compareItem !== undefined
                                            ? "Added to cart"
                                            : "Add to cart"
                                        }
                                      >
                                        {cartItem !== undefined &&
                                        cartItem.quantity > 0
                                          ? "Added"
                                          : "Add to cart"}
                                      </button>
                                    ) : (
                                      <Link to={`${process.env.PUBLIC_URL}/product/${compareItem.id}`}>
                                      <button className="active">
                                        View Product
                                      </button>
                                      </Link>
                                    )} */}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            <th className="title-column">Price</th>
                            {compareItems.map((compareItem, key) => {

                              // const discountedPrice = getDiscountPrice(
                              //   compareItem.price,
                              //   compareItem.discount
                              // );
                              // const finalProductPrice = (
                              //   compareItem.price * currency.currencyRate
                              // ).toFixed(2);
                              // const finalDiscountedPrice = (
                              //   discountedPrice * currency.currencyRate
                              // ).toFixed(2);

                              let discountedPrice,finalProductPrice,finalDiscountedPrice =''

                              const addCommas=(number)=>{
                                number=number.toLocaleString('en-IN', {
                                  maximumFractionDigits: 2,
                                  style: 'currency',
                                  currency: currency.currencyName
                              });
                              return number;
                              }
                              const updatePrice=()=>{
                                 discountedPrice = getDiscountPrice(compareItem.price,compareItem.discount);
                               finalProductPrice = +(compareItem.price * currency.currencyRate).toFixed(2);
                               finalDiscountedPrice = +(
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);
                              discountedPrice =discountedPrice? addCommas(discountedPrice):null
                              finalProductPrice=addCommas(finalProductPrice)
                            finalDiscountedPrice=finalDiscountedPrice?addCommas(finalDiscountedPrice):null
                              }
                            
                              updatePrice()
                              return (
                                <td className="product-price" key={key}>
                                   {typeof compareItem.price === "number" ?(
                                      discountedPrice !== null ? (
                                        <Fragment>
                                          <span>{finalDiscountedPrice}</span>{" "}
                                          <span className="old">{finalProductPrice}</span>
                                        </Fragment>
                                      ) : (
                                        <span> {finalProductPrice} </span>
                                      )
                                      ):(null)
                                      }
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <th className="title-column">Description</th>
                            {compareItems.map((compareItem, key) => {
                              return (
                                <td className="product-desc" key={key}>
                                  <p>
                                    {compareItem.shortDescription
                                      ? <div dangerouslySetInnerHTML={{__html: compareItem.shortDescription}} style={{display:'flex',justifyContent:'center'}} />
                                      : "N/A"}
                                  </p>
                                </td>
                              );
                            })}
                          </tr>

                          <tr>
                            <th className="title-column">Rating</th>
                            {compareItems.map((compareItem, key) => {
                              let i=0,totalRating=0;
                              for(i;i<compareItem.reviews.length;i++){
                            totalRating+=parseInt(compareItem.reviews[i].rating);
                              }
                              totalRating/=i;
                              totalRating=Math.ceil(totalRating)
                              return (
                                <td className="product-rating" key={key}>
                                  <Rating ratingValue={totalRating} noOfRatings={compareItem.reviews.length} />
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-shuffle"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in compare <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        Add Items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Compare.propTypes = {
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteFromCompare: PropTypes.func
};

const mapStateToProps = state => {
  return {
    compareItems: state.compareData,
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
        deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
