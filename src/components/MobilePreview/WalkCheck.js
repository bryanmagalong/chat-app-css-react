import React from 'react';
import PropTypes from 'prop-types';

const WalkCheck = (props) => (
  <div>
    <div>Check</div>
    <div>{props.time} walk</div>
    <div>${props.price}</div>
  </div>
);

WalkCheck.propTypes = {
  time: PropTypes.string.isRequired,
  price: function(props, price, WalkCheck) {
    // price prop validations
    // if price values is not a number
    if (isNaN(parseFloat(props[price]))) {
      return new Error(
        `Invalid prop ${price} supplied to ${WalkCheck}. Validation failed!!`,
      );
    }

    if (parseFloat(props[price]) < 0) {
      return new Error(
        `Invalid prop ${price} supplied to ${WalkCheck}. Value must be higher or equal to 0.`,
      );
    }
  },
};
export default WalkCheck;
