import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/collections";
// import Rating from "./sub-components/ProductRating";
import CollectionModal from "../../wrappers/collection/CollectionModal";

const CollectionGridListSingle = ({
  collection,
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
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(collection.price, collection.discount);
  const finalCollectionPrice = +(collection.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="collection-img">
            <Link to={process.env.PUBLIC_URL + "/collections/" + collection.name.toLowerCase()}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + collection.image[0]}
                alt=""
              />
              {collection.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + collection.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
            { collection.new ? (
              <div className="product-img-badges">
               <span className="purple">New</span>
              </div>
            ) : (
              ""
            )}

            {/* <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(collection, addToast)}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {collection.affiliateLink ? (
                  <a
                    href={collection.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    {" "}
                    Buy now{" "}
                  </a>
                ) : collection.variation && collection.variation.length >= 1 ? (
                  <Link to={`${process.env.PUBLIC_URL}/collections/${collection.name}`}>
                    Select Option
                  </Link>
                ) : collection.stock && collection.stock > 0 ? (
                  <button
                    onClick={() => addToCart(collection, addToast)}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
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
                )}
              </div>
              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div> */}
          </div>
          <div className="product-content text-center">
            <h3>
              <Link style={{textTransform:"capitalize"}} to={process.env.PUBLIC_URL + "/collections/" + collection.name.toLowerCase()}>
                {collection.name}
              </Link>
            </h3>
            {/* {collection.rating && collection.rating > 0 ? (
              <div className="collection-rating">
                <Rating ratingValue={collection.rating} />
              </div>
            ) : (
              ""
            )} */}
            {/* <div className="product-price">
              {discountedPrice !== null ? (
                <Fragment>
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
                  <span className="old">
                    {currency.currencySymbol + finalCollectionPrice}
                  </span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalCollectionPrice} </span>
              )}
            </div> */}
          </div>
        </div>
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="collection-img">
                  <Link to={process.env.PUBLIC_URL + "/collections/" + collection.name.toLowerCase()}>
                    <img
                      className="default-img img-fluid"
                      src={process.env.PUBLIC_URL + collection.image[0]}
                      alt=""
                    />
                    {collection.image.length > 1 ? (
                      <img
                        className="hover-img img-fluid"
                        src={process.env.PUBLIC_URL + collection.image[1]}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                  {collection.new ? (
                    <div className="product-img-badges">
                      <span className="purple">New</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/collections/" + collection.name.toLowerCase()}>
                    {collection.name}
                  </Link>
                </h3>
                {/* <div className="product-list-price">
                  {discountedPrice !== null ? (
                    <Fragment>
                      <span>
                        {currency.currencySymbol + finalDiscountedPrice}
                      </span>{" "}
                      <span className="old">
                        {currency.currencySymbol + finalCollectionPrice}
                      </span>
                    </Fragment>
                  ) : (
                    <span>{currency.currencySymbol + finalCollectionPrice} </span>
                  )}
                </div> */}
                {/* {collection.rating && collection.rating > 0 ? (
                  <div className="rating-review">
                    <div className="product-list-rating">
                      <Rating ratingValue={collection.rating} />
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
                {collection.description ? (
                  <p>{collection.description}</p>
                ) : (
                  ""
                )}

                {/* <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                    {collection.affiliateLink ? (
                      <a
                        href={collection.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        {" "}
                        Buy now{" "}
                      </a>
                    ) : collection.variation && collection.variation.length >= 1 ? (
                      <Link
                        to={`${process.env.PUBLIC_URL}/collections/${collection.name}`}
                      >
                        Select Option
                      </Link>
                    ) : collection.stock && collection.stock > 0 ? (
                      <button
                        onClick={() => addToCart(collection, addToast)}
                        className={
                          cartItem !== undefined && cartItem.quantity > 0
                            ? "active"
                            : ""
                        }
                        disabled={
                          cartItem !== undefined && cartItem.quantity > 0
                        }
                        title={
                          cartItem !== undefined
                            ? "Added to cart"
                            : "Add to cart"
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
                    )}
                  </div>

                  <div className="shop-list-wishlist ml-10">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => addToWishlist(collection, addToast)}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                  <div className="shop-list-compare ml-10">
                    <button
                      className={compareItem !== undefined ? "active" : ""}
                      disabled={compareItem !== undefined}
                      title={
                        compareItem !== undefined
                          ? "Added to compare"
                          : "Add to compare"
                      }
                      onClick={() => addToCompare(collection, addToast)}
                    >
                      <i className="pe-7s-shuffle" />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* collection modal */}
      <CollectionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        collection={collection}
        currency={currency}
        discountedprice={discountedPrice}
        finalcollectionprice={finalCollectionPrice}
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

CollectionGridListSingle.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  collection: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default CollectionGridListSingle;
