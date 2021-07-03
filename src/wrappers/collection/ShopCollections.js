import PropTypes from "prop-types";
import React from "react";
import CollectiongridList from'./CollectionsgridList'

const ShopCollections = ({ collections, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <CollectiongridList collections={collections} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopCollections.propTypes = {
  layout: PropTypes.string,
  collections: PropTypes.array
};

export default ShopCollections;
