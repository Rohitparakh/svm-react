import PropTypes from "prop-types";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";

const ProductImageGallery = ({ product, slideGo }) => {

  const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);
   
  // effect for swiper slider synchronize
  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
      const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
      // console.log({gallerySwiper,gallerySwiperRef})
      if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }      
  }, []);
  
  useEffect(()=>{
    gallerySwiperRef.current.swiper.slideTo(slideGo)
  },[slideGo])
  const [swiper, updateSwiper] = useState(null);

  // swiper slider settings
  const gallerySwiperParams = {
    freeMode:false,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade",
    getSwiper:updateSwiper
  };

  const thumbnailSwiperParams = {
    freeMode:false,

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
 
  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product.variation  ? (
          <div className="product-img-badges">
            {product.variation[0].discount ? (
              <span className="pink">-{product.variation[0].discount}%</span>              
            ) : (null)
            }
            {product.new ?
        <span className="purple">New</span> : ""}
          </div>
        ) : (
          product.discount ? (
          <div className="product-img-badges">
            <span className="pink">-{product.discount}%</span>
            {product.new ?
        <span className="purple">New</span> : ""}
           </div>            
          ):null

          
        )}
        
        <LightgalleryProvider>
          <Swiper {...gallerySwiperParams}  ref={gallerySwiperRef}>
            {product.image &&
              product.image.map((single, key) => {
                return (
                  <div key={key}>
                    <LightgalleryItem
                      group="any"
                      src={process.env.PUBLIC_URL + single}
                    >
                      <button>
                        <i className="pe-7s-expand1"></i>
                      </button>
                    </LightgalleryItem>
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
        </LightgalleryProvider>
      </div>
      <div className="product-small-image-wrapper mt-15">
        <Swiper {...thumbnailSwiperParams}  ref={thumbnailSwiperRef}>
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
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.object,
  slideGo: PropTypes.number
};

export default ProductImageGallery;
