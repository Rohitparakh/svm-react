import PropTypes from "prop-types";
import React,{useState} from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
// import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
  currency,
  compareItems,
  productFullDesc,
  setModel
}) => {
  const compareItem = compareItems.filter(
    compareItem => compareItem.id === product.id
  )[0];
  const { addToast } = useToasts();
const[slideGo,setSlideGo]=useState(4)

  return (
    <div
      className={`shop-area mt-n120 ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="product-image col-lg-6 col-md-6">
            {/* product image gallery */}
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} slideGo={slideGo} />
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              currency={currency}
              compareItem={compareItem}
              addToast={addToast}
          productFullDesc={productFullDesc}
          setModel={setModel}
          setSlideGo={setSlideGo}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  galleryType: PropTypes.string,
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  productFullDesc: PropTypes.string,
  setModel:PropTypes.func
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    compareItems: state.compareData
  };
};

export default connect(mapStateToProps)(ProductImageDescription);
