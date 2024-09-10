import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
  <div className="bg-neutral-content min-h-screen min-h-screen px-4 py-8 text-surface dark:bg-neutral-700 dark:text-white">
    {children}
  </div>
);

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;