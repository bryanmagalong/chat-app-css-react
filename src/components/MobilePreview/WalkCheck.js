import React from 'react';
import PropTypes from 'prop-types';

const WalkCheck = (props) => (
  <div className="flex justify-between items-center pl-message-padding-x pr-walkcheck-padding-x mb-message-bottom w-walkcheck-x h-message-y text-message text-very-light-violet bg-gradient-to-l from-light-violet to-light-magenta rounded-message-left">
    <div className="w-2.5 h-2.5 rounded-full border" />
    <div className="w-8/12 text-left ml-walkcheck-time">{props.time} walk</div>
    <div className="text-price font-bold">${props.price}</div>
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
