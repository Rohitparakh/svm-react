import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCompare } from "../../redux/actions/compareActions";

const ProductGrid = ({
  id,
  allProducts,
  products,
  currency,
  addToCompare,
  compareItems,
  sliderClassName,
  spaceBottomClass
}) => {

  var productsWithoutCurrentProduct=products.map(product => {
     if(product.id!=id)return product
  })
  allProducts=allProducts.slice(0, 4)
var productToBeMapped;
if(productsWithoutCurrentProduct[1]) {productToBeMapped=productsWithoutCurrentProduct}else {
  productToBeMapped=allProducts
}
  return (
    <Fragment>
      {productToBeMapped.map(product => {
       if(product!=undefined){ return (
          <ProductGridSingle
          id={id}
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            addToCompare={addToCompare}
            compareItem={
              compareItems.filter(
                compareItem => compareItem.id === product.id
              )[0]
            }
            key={product.id}
          />
        );}
          })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  id:PropTypes.string,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  allProducts: PropTypes.array,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.type,
      ownProps.limit
    ),
    allProducts:state.productData.products,
    currency: state.currencyData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
