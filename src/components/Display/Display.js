import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="component-display">
        <div className="value">{value}</div>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
