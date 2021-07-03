import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addToCompare } from "../../redux/actions/compareActions";
import CollectionGridListSingle from "../../components/collection/CollectionGridListSingle";

const CollectionGrid = ({
  collections,
  currency,
  addToCompare,
  compareItems,
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      {collections.map(collection => {
        return (
          <CollectionGridListSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            collection={collection}
            currency={currency}
            addToCompare={addToCompare}
            compareItem={
              compareItems.filter(
                compareItem => compareItem.id === collection.id
              )[0]
            }
            key={collection.id}
          />
        );
      })}
    </Fragment>
  );
};

CollectionGrid.propTypes = {
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  collections: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(CollectionGrid);
