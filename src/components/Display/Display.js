import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    return (
        <div className="component-display">
            <div>
                {value}
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;


/* notes;
 - should display an empty string when no value is provided.
 
 */