import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import categoryData from "../../data/category/category-one.json";
import CategoryOneSingle from "../../components/category/CategoryOneSingle.js";
import './CategoryOneSlider.css'

const CategoryOneSlider = ({ spaceBottomClass }) => {
  // swiper slider settings
  const settings = {
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "progressbar"
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next.customized-swiper-button-next',
    //   prevEl: '.swiper-button-prev.customized-swiper-button-prev'
    // },
    loop: true,
    speed:1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div
      className={`products-area ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container">
        <div className="collection-wrap-2">
          <div className="collection-active-2">
            <Swiper {...settings}>
              {categoryData &&
                categoryData.map((single, key) => {
                  return (
                    <CategoryOneSingle
                      data={single}
                      key={key}
                      sliderClass="swiper-slide"
                    />
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryOneSlider.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default CategoryOneSlider;
