import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";
import { getDiscountPrice } from "../../helpers/product";

const ProductDescriptionInfo = ({
  product,
  // discountedPrice,
  currency,
  // finalDiscountedPrice,
  // finalProductPrice,
  compareItem,
  addToast,
  addToCompare,
  productFullDesc,
  setModel,
  setSlideGo
}) => {
  
  
  useEffect(() => {
    setTimeout(()=>{
    setModel(selectedModel);
    },1000)
  })
  
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
  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,
  //   selectedProductColor,
  //   selectedProductSize
  // );
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
  console.log(tempvariant)
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
  
  return (
    <div className="product-details-content ml-70">
      <h2>{selectedTitle}</h2>
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
      {product.variation ? (
        
        <div className="pro-details-size-color">
          {product.variation[0].color?(
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
          ):null}

          <div className="pro-details-size">
            <span>{product.variation[0].size?"Size":""}</span>
            <div className="pro-details-size-content">
              {product.variation &&
                product.variation.map(single => {
                  
                  return single.color === selectedProductColor
                    ? single.size? single.size.map((singleSize, key) => {
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
                      }):''
                    : "";
                })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      

      
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
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
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
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
          </div>
        */}
          <div className="pro-details-cart btn-hover">
          
                <a style={{display:"flex",alignItems:"center",justifyContent:"center"}} target="_blank"  rel="noopener noreferrer" href="tel:7299005580">
                <i className="fa fa-phone" style={{fontSize:"20px",marginRight:"5px"}}/>
                Call Us Now
                </a>
                
                <a style={{display:"flex",alignItems:"center",justifyContent:"center"}} target="_blank" className="secondary-button" rel="noopener noreferrer" href="https://wa.me/+917299005580">
                <i className="fa fa-whatsapp" style={{fontSize:"20px",marginRight:"5px"}}/>
                Whatsapp
                </a>
          
          
          </div>
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
          </div>
        */}
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
      <div className="pro-details-list">
        <p style={{listStyle:"disc"}} dangerouslySetInnerHTML={{__html:product.shortDescription }}>          
          {/* {product.shortDescription} */}
          </p>
      </div>
      {product.category ? (
        <div className="pro-details-meta">
          <span>Categories:</span>
          <ul>
            {product.category.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/collections/"+single}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags:</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/search/"+single}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="pro-details-social">
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
          <li>
            <a target="_blank"  rel="noopener noreferrer" href="https://wa.me/+917299005580">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="description-review-wrapper">
         <center><h3 style={{textDecoration:"underline"}}>Description</h3></center><div>{productFullDesc}</div>
         </div> */}
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCompare: PropTypes.func,
  addToast: PropTypes.func,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  productFullDesc: PropTypes.string,
  setModel:PropTypes.func,
  setSlideGo:PropTypes.func

};

const mapDispatchToProps = dispatch => {
  return {
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);
