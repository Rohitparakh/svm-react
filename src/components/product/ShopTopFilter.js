import PropTypes from "prop-types";
import React from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  setActiveSort,
  toggleShopTopFilter
} from "../../helpers/product";

const ShopTopFilter = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);
  let categoryClass;
  // console.log(uniqueColors)
  // console.log(uniqueSizes)
  if(uniqueColors.length<2 && uniqueSizes.length==0){
   categoryClass="col-md-6 col-sm-12 col-xs-12 mb-30";
  }else if(uniqueColors.length<2 || uniqueSizes.length==0){
   categoryClass="col-md-4 col-sm-4 col-xs-12 mb-30";
  }else{
   categoryClass="col-md-3 col-sm-6 col-xs-12 mb-30";
  }

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
     
        <div className="row">
        <div className="filter-active filter-clear">
        <button onClick={e => {
                            getSortParams("", '');
                            setActiveSort(e);
                            toggleShopTopFilter(e)
                          }}>
                        <i className="fa fa-times"></i> Clear Filter
                        </button>
        </div>
        </div>
        <div className="row">
          {/* Product Filter */}
          <div className={categoryClass}>
            <div className="product-filter">
              <h5>Categories</h5>
              {uniqueCategories ? (
                <ul>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("category", category);
                            setActiveSort(e);
                            toggleShopTopFilter(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

          {/* Product Filter */}
          {uniqueColors.length>2 ? (
              <>
          <div className={categoryClass}>
            <div className="product-filter">
               <h5>Color</h5>
                 <ul>
                  {
                  
                  uniqueColors.map((color, key) => {
                    if(color!=""){
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("color", color);
                            setActiveSort(e);
                            toggleShopTopFilter(e);
                          }}
                        >
                          {color}
                          {/* {console.log(uniqueColors)} */}
                        </button>
                      </li>
                    );
                        }
                  })}
                </ul>
                </div>
          </div>
            </>) : (
               null
              )}
            
          {/* Product Filter */}
          {uniqueSizes.length!=0 ? (
          <div className={categoryClass}>
            <div className="product-filter">
              <h5>Size</h5>
                <ul>
                  {uniqueSizes.map((size, key) => {
                    return (
                      <li key={key}>
                        <button
                          className="text-uppercase"
                          onClick={e => {
                            getSortParams("size", size);
                            setActiveSort(e);
                            toggleShopTopFilter(e);
                            console.log(size)
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                </div>
          </div>
              ) : (
null
              )}
          {/* Product Filter */}
          <div className={categoryClass}>
            <div className="product-filter product-filter--tag">
              <h5>Tag</h5>
              {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("tag", tag);
                            setActiveSort(e);
                            toggleShopTopFilter(e);
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;
