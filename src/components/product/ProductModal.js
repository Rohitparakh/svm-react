import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect,useRef } from "react";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { Modal } from "react-bootstrap";
import Rating from "./sub-components/ProductRating";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import { Link } from 'react-router-dom'

function ProductModal(props) {
  
  const { product } = props;
  const { currency } = props;
  // const { discountedprice } = props;
  // const { finalproductprice } = props;
  // const { finaldiscountedprice } = props;
const {show}=props;

let discountedPrice = ''
let finalProductPrice =''
let finalDiscountedPrice =''


  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  
  const wishlistItem = props.wishlistitem;
  const compareItem = props.compareitem;

  const addToCart = props.addtocart;
  const addToWishlist = props.addtowishlist;
  const addToCompare = props.addtocompare;

  const addToast = props.addtoast;
  const cartItems = props.cartitems;

  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,
  //   selectedProductColor,
  //   selectedProductSize
  // );
  // let shortDesc=document.createElement("div");
  // shortDesc.innerHTML=product.shortDescription; 
 const renderShortDesc=()=>{
   return {__html:  product.shortDescription.substring(0,100)+"..."}
 }
  
 useEffect(()=>{
  //  console.log(gallerySwiperRef)
  // if(gallerySwiperRef.current!=null){console.log( gallerySwiperRef.current.swiper.slideTo())
  //   console.log(slideGo)
  //     gallerySwiperRef.current.swiper.slideTo(slideGo)}
  //  else console.log("nnn")

},[slideGo])
  
const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);
useEffect(()=>{
  if(gallerySwiperRef.current!=null)      gallerySwiperRef.current.swiper.slideTo(slideGo)
  if(gallerySwiperRef.current!=null && thumbnailSwiperRef.current!=null){
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
    if (gallerySwiper.controller && thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }}
})

useEffect(() => {
      // if(gallerySwiperRef.current!=null && thumbnailSwiperRef.current!=null){
      // const gallerySwiper = gallerySwiperRef.current.swiper;
      // const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
      // if (gallerySwiper.controller && thumbnailSwiper.controller
      // ) {
      //   gallerySwiper.controller.control = thumbnailSwiper;
      //   thumbnailSwiper.controller.control = gallerySwiper;
      // }}
    }, [gallerySwiperRef,thumbnailSwiperRef]);


  const gallerySwiperParams = {
    spaceBetween: 10,
    loopedSlides: 4,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false
    // },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  const thumbnailSwiperParams = {
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  
  ///product total rating calculation
let i=0,totalRating=0;
  for(i;i<product.reviews.length;i++){
totalRating+=parseInt(product.reviews[i].rating);
  }
  totalRating/=i;
  totalRating=Math.ceil(totalRating)


  const [selectedTitle,setSelectedTitle]=useState(product.name)

  const [selectedModel,setSelectedModel]=useState(product.model)

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color ? product.variation[0].color : "":''
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size ? product.variation[0].size[0].name : "": ''
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size ? product.variation[0].size[0].stock : product.stock:''
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const [selectedVariant, setSelectedVariant ] = useState({
    "size":selectedProductSize,
    "color":selectedProductColor
  });

  const [price,setprice]=useState(
    product.variation ? product.variation[0].price ? product.variation[0].price:product.price:product.price)
  const [discount,setDiscount]=useState(
    product.variation ? product.variation[0].discount ? product.variation[0].discount:product.discount:product.discount)
  

  const addCommas=(number)=>{
    number=number.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: currency.currencyName
  });
  return number;
  }
  const updatePrice=()=>{
     discountedPrice = getDiscountPrice(price,discount);
   finalProductPrice = +(price * currency.currencyRate).toFixed(2);
   finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  discountedPrice =discountedPrice? addCommas(discountedPrice):null
  finalProductPrice=addCommas(finalProductPrice)
finalDiscountedPrice=finalDiscountedPrice?addCommas(finalDiscountedPrice):null
  }

  updatePrice()
  const [selectedColor,setSelectedColor]=useState([
    product.variation ?
    //  product.variation[0].color ? product.variation[0].color : 
     product.variation[0]:null]);
  const [selectedSize,setSelectedSize]=useState([
    product.variation ? product.variation[0].size ? product.variation[0].size[0]:null:null]);

    const setPrice=(colour,Size)=>{

  if(Size=="null"){     
    
      var tempvariant=
      product.variation? product.variation[0].color? product.variation.filter(val=>{return val.color==colour;}):'':''
      setSelectedColor(tempvariant)
      setSelectedVariant({...selectedVariant,'color':selectedProductColor})
      setprice(tempvariant[0].price?tempvariant[0].price:product.price)
  setDiscount(tempvariant[0].discount?tempvariant[0].discount:null)
  updatePrice()
  setSelectedTitle(tempvariant[0].title?tempvariant[0].title:product.name)
  setSelectedModel(tempvariant[0].model?tempvariant[0].model:product.model)
  setSlideGo(tempvariant[0].slideGo?tempvariant[0].slideGo:null)

    } 
    else if(colour=="null"){

    
  var tempvariant=
  product.variation? product.variation[0].size ? selectedColor[0].size.filter(val=>{return val.name==Size}):'':''
   setSelectedSize(tempvariant)
 setSelectedVariant({...selectedVariant,'size':selectedProductSize})
   setprice(tempvariant[0].price?tempvariant[0].price:product.price)
   setDiscount(tempvariant[0].discount?tempvariant[0].discount:null)
   updatePrice()
   setSelectedTitle(tempvariant[0].title?tempvariant[0].title:product.name)
   setSelectedModel(tempvariant[0].model?tempvariant[0].model:product.model)


  }}

  const[slideGo,setSlideGo]=useState(4)


  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="product-image col-md-5 col-sm-12 col-xs-12">
              <div className="product-small-image-wrapper">
                <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
                  {product.image &&
                    product.image.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className="img-fluid"
                            alt={product.name}
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
                  {product.image &&
                    product.image.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={process.env.PUBLIC_URL + single}
                              className="img-fluid"
                              alt={product.name}
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{selectedTitle}</h2>
                <p>Model: {selectedModel}</p>
                <div className="product-details-price">
                {typeof price === "number" ?(
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
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="pro-details-rating-wrap">
                    <div className="pro-details-rating">
                      <Rating ratingValue={totalRating} noOfRatings={product.reviews.length} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="pro-details-list">
                  <p id="shortDesc" dangerouslySetInnerHTML={renderShortDesc()}>
                    {/* {product.shortDescription} */}
                    </p>
                </div>

                {product.variation ? (
        
        <div className="pro-details-size-color">
          <div className="pro-details-color-wrap">
            <span>{product.variation[0].color?"Color":""}</span>
            <div className="pro-details-color-content">
              {product.variation.map((single, key) => {
                if(single.color){return (
                  <label
                    className={`pro-details-color-content--single ${single.color}`}
                    key={key}
                  >
                    <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      checked={
                        single.color === selectedProductColor ? "checked" : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color?single.color:'');
                        setSelectedProductSize(single.size ? single.size[0].name:null);
                        setProductStock(single.size?single.size[0].stock:'');
                        setQuantityCount(1);
                        setPrice(single.color,"null");
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                );}
              })}
            </div>
          </div>
          <div className="pro-details-size">
            <span>{product.variation[0].size?"Size":""}</span>
            <div className="pro-details-size-content">
              {product.variation &&
                product.variation.map(single => {
                  
                  return single.color === selectedProductColor
                    ? single.size ? single.size.map((singleSize, key) => {
                      {if(single.size){
                    
                            return (
                          <label
                            className={`pro-details-size-content--single`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                        setPrice("null",singleSize.name)
                              }}
                            />
                            <span className="size-name">{singleSize.name}</span>
                          </label>
                        );
                      }}
                      }) :"" : "";
                    
                })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
                {product.affiliateLink ? (
                  <div className="pro-details-quality">
                    <div className="pro-details-cart btn-hover">
                      <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"  rel="noopener noreferrer"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="pro-details-quality">
                    {/* <div className="cart-plus-minus">
                      <button
                        onClick={() =>
                          setQuantityCount(
                            quantityCount > 1 ? quantityCount - 1 : 1
                          )
                        }
                        className="dec qtybutton"
                      >
                        -
                      </button>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={quantityCount}
                        readOnly
                      />
                      <button
                        onClick={() =>
                          setQuantityCount(
                            quantityCount < productStock - productCartQty
                              ? quantityCount + 1
                              : quantityCount
                          )
                        }
                        className="inc qtybutton"
                      >
                        +
                      </button>
                    </div> */}
                    <div className="pro-details-cart btn-hover">
                       <Link style={{marginRight:"5px"}} to={process.env.PUBLIC_URL + "/product/"+product.id}>
                         
                          {" "}
                          View Detailed{" "}
                        
                        </Link>
                        <a className="secondary-button" style={{marginRight:"5px"}} target="_blank"  rel="noopener noreferrer" href="tel:7299005580">
                Call Us Now
                </a>
                        <a className="tertiary-button" style={{marginRight:"5px"}} target="_blank"  rel="noopener noreferrer" href="https://wa.me/+917299005580">
                        <i className="fa fa-whatsapp" style={{fontSize:"20px", marginRight:"5px"}}></i>
                Whatsapp
                </a>
                    </div>
                    {/* <div className="pro-details-cart btn-hover">
                      {productStock && productStock > 0 ? (
                        <button
                          onClick={() =>
                            addToCart(
                              product,
                              addToast,
                              quantityCount,
                              selectedProductColor,
                              selectedProductSize
                            )
                          }
                          disabled={productCartQty >= productStock}
                        >
                          {" "}
                          Add To Cart{" "}
                        </button>
                      ) : (
                        <button disabled>Out of Stock</button>
                      )}
                    </div> */}
                    {/* <div className="pro-details-wishlist">
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
                    <div className="pro-details-compare">
                      <button
                        className={compareItem !== undefined ? "active" : ""}
                        disabled={compareItem !== undefined}
                        title={
                          compareItem !== undefined
                            ? "Added to compare"
                            : "Add to compare"
                        }
                        onClick={() => addToCompare(product, addToast)}
                      >
                        <i className="pe-7s-shuffle" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

ProductModal.propTypes = {
  addtoast: PropTypes.func,
  addtocart: PropTypes.func,
  addtocompare: PropTypes.func,
  addtowishlist: PropTypes.func,
  cartitems: PropTypes.array,
  compareitem: PropTypes.object,
  currency: PropTypes.object,
  onHide: PropTypes.func,
  product: PropTypes.object,
  show: PropTypes.bool,
  wishlistitem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartData
  };
};

export default connect(mapStateToProps)(ProductModal);
