import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    return (
        <div>
            <div className="component-display">
                {value}
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;