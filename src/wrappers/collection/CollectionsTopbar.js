import PropTypes from "prop-types";
import React, { Fragment } from "react";
import CollectionsTopAction from "../../components/collection/CollectionsTopAction";

const CollectionsTopbar = ({
  getLayout,
  getFilterSortParams,
  collectionCount,
  sortedCollectionCount
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <CollectionsTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        collectionCount={collectionCount}
        sortedCollectionCount={sortedCollectionCount}
      />
    </Fragment>
  );
};

CollectionsTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  collectionCount: PropTypes.number,
  sortedCollectionCount: PropTypes.number
};

export default CollectionsTopbar;
