import React from 'react';
import PropTypes from 'prop-types';
import Each from './Each';

const Home = function compHome({ nasdaq }) {
  const companies = nasdaq;
  companies.sort((a, b) => b.changesPercentage - a.changesPercentage);
  return (
    <>
      <div className="container">
        {companies.map((item, index) => (
          <div key={item.ticker} className="container-child">
            <Each name={item.ticker} price={item.price} index={index} company={item.companyName} />
          </div>
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  nasdaq: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
