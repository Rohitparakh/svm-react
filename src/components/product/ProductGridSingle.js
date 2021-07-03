import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";

const ProductGridSingle = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass
}) => {
  let i=0,totalRating=0;
  for(i;i<product.reviews.length;i++){
totalRating+=parseInt(product.reviews[i].rating);
  }
  totalRating/=i;
  totalRating=Math.ceil(totalRating)
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();
  let discountedPrice = ''
  let finalProductPrice =''
  let finalDiscountedPrice =''
  const addCommas=(number)=>{
    number=number.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: currency.currencyName
  });
  return number;
  }
  const updatePrice=()=>{
     discountedPrice = getDiscountPrice(product.price,product.discount);
   finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
   finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  discountedPrice =discountedPrice? addCommas(discountedPrice):null
  finalProductPrice=addCommas(finalProductPrice)
finalDiscountedPrice=finalDiscountedPrice?addCommas(finalDiscountedPrice):null
  }

  updatePrice()
  return (
    <Fragment>
      <div 
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-action">
            <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to compare"
                      : "Add to compare"
                  }
                  onClick={() => addToCompare(product, addToast)}
                >
                  <i className="pe-7s-shuffle" />
                </button>
               </div>
              {/*<div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(product, addToast)}
                >
                  <i className="pe-7s-like" />
                </button>
              </div> */}
              <div className="pro-same-action pro-cart">
              <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                                      
                                      View Product
                                    
                                    </Link>
                {/* {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    {" "}
                    Buy now{" "}
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                    Select Option
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    // onClick={() => addToCart(product, addToast)}
                    // className={
                    //   cartItem !== undefined && cartItem.quantity > 0
                    //     ? "active"
                    //     : ""
                    // }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Added to cart" : "Add to cart"
                    }
                  >
                    {" "}
                    <i className="pe-7s-cart"></i>{" "}
                    {cartItem !== undefined && cartItem.quantity > 0
                      ? "Added"
                      : "Add to cart"}
                  </button>
                ) : (
                  <button disabled className="active">
                    Out of Stock
                  </button>
                )} */}
              </div>
              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="product-rating">
                <Rating ratingValue={totalRating} noOfRatings={product.reviews.length} />
              </div>
            ) : (
              ""
            )}
            <div className="product-price">
            {typeof product.price === "number" ?(
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
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default ProductGridSingle;
