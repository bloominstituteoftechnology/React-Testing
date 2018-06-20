import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
  return (
    <div className="component-display">
      {value}
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display;