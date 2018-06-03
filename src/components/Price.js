import React from 'react';
import PropTypes from 'prop-types';

const Price = ({price}) => (
  <span className="ui green ribbon label">${price}</span>
);

Price.defaultProps = {
  price: PropTypes.string.isRequired
};

export default Price;
