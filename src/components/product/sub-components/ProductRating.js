import PropTypes from "prop-types";
import React, { Fragment } from "react";

const ProductRating = ({ ratingValue, noOfRatings }) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<i className="fa fa-star-o yellow" key={i}></i>);
  }
  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = <i className="fa fa-star yellow" key={i}></i>;
    }
  }
  return <Fragment>{rating} 
  {noOfRatings!==null?(
    `(${noOfRatings})`
  ):""
    }
  </Fragment>;
};

ProductRating.propTypes = {
  ratingValue: PropTypes.number,
  noOfRatings: PropTypes.number
};

export default ProductRating;
