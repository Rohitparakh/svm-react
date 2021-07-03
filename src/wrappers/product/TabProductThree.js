import PropTypes from "prop-types";
import React, {useState} from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGrid from "./ProductGrid";
import Swiper from "react-id-swiper";

const TabProductThree = ({ spaceBottomClass, category }) => {
  const settings = {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    rebuildOnUpdate : true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false
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
      ),
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
    }};

    const bestSellerSlider=<ProductGrid
    category={category}
    type="bestSeller"
    limit={8}
    spaceBottomClass="mb-35"
    sliderClassName="swiper-slide"
  />

  const newArrivalsSlider= <ProductGrid
  category={category}
  type="new"
  limit={8}
  spaceBottomClass="mb-35"
  sliderClassName="swiper-slide"
/>
  const saleItemsSlider= <ProductGrid
  category={category}
  type="saleItems"
  limit={8}
  spaceBottomClass="mb-35"
  sliderClassName="swiper-slide"

/>

const [reRender,setReRender]=useState(true)
const renderNot=()=>{
  setReRender(!reRender)
console.log(reRender)
}
  return (
    <div
      className={`product-area hm9-section-padding ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <Tab.Container defaultActiveKey="bestSeller" onSelect={renderNot}>
          <Nav variant="pills" className="product-tab-list pb-55 text-center">
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="custom-row-4">
              <Swiper {...settings}>
          {newArrivalsSlider}
          </Swiper>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="custom-row-4">
              <Swiper {...settings}>
          {bestSellerSlider}
          </Swiper>
             </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="custom-row-4">
              <Swiper {...settings}>
          {saleItemsSlider}
          </Swiper>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductThree.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default TabProductThree;
