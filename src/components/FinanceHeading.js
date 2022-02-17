import React from 'react';
import PropTypes from 'prop-types';

const FinanceHeading = function finHeader({ symbol }) {
  return (
    <div className="finance-heading-container">
      <div className="finance-heading">
        {symbol}
        {' '}
        -
        {' '}
        Financial Indicators
      </div>
    </div>
  );
};

FinanceHeading.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default FinanceHeading;
