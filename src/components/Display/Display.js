import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';
import '../Button/Button.js';

const Display = ({ value }) => {
    return (
        <div className="component-display">
            <div className="component-secondary">
                {value}
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;
