import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/collections";

const CollectionsTopAction = ({
  getLayout,
  getFilterSortParams,
  collectionCount,
  sortedCollectionCount
}) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
      
     <center>
        <p>
          Showing {sortedCollectionCount} of {collectionCount} result
        </p>
        </center>
      </div>
<center>
      <div className="shop-tab">
        <button
          onClick={e => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={e => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
        <button
          onClick={e => {
            getLayout("list");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-list-ul" />
        </button>
      </div>
      </center>

    </div>
  );
};

CollectionsTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  collectionCount: PropTypes.number,
  sortedCollectionCount: PropTypes.number
};

export default CollectionsTopAction;
