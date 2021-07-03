import React from "react";
import Swiper from "react-id-swiper";
import ImageSliderSingle from "../../components/image-slider/ImageSliderSingle";
import imageData from "../../data/image-slider/image-slider.json";
import { LightgalleryProvider } from "react-lightgallery";

const ImageSlider = () => {
  const settings = {
    loop: true,
    spaceBetween:20,
    centeredSlides: true,
    lazy:true,
    grabCursor: true,
    // autoplay:{
    //   delay:3000,
    //   disableOnInteraction:true
    // },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    },
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
    <div className="image-slider-area mt-30">
      <div className="image-slider-active">
      <LightgalleryProvider>
        <Swiper {...settings}>
          {imageData &&
            imageData.map((single, key) => {
              return (
                <ImageSliderSingle
                  data={single}
                  sliderClass="swiper-slide"
                  key={key}
                />
              );
            })}
        </Swiper>
        </LightgalleryProvider>
      </div>
    </div>
  );
};

export default ImageSlider;
