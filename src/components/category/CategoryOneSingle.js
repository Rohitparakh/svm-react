import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { getSortedProducts } from "../../helpers/product";
import { connect } from 'react-redux'

const CategoryOneSingle = ({ data, sliderClass,products }) => {
 let filteredProducts= getSortedProducts(products, "category", data.category)
  return (
    <div className={`collection-product-2 ${sliderClass ? sliderClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="mt-10 collection-content-2 text-center">
        <span>{filteredProducts.length} products</span>
        <h4>
          <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
      </div>
    </div>
  );
};

CategoryOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
  product: PropTypes.array
};
const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};
export default connect(mapStateToProps) (CategoryOneSingle);
