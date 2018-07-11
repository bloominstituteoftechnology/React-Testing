import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';


{/* so here we have a dumb component */}
{/* why is it taking an object with value inside it as a parameter? */}
const Display = ({ value }) => {
    {/*
        Ah...I see...it's returning an object
        with the new value to be rendered inside
        This is part of how we update the view as new
        calculations are made.
    */}
    return (
        <div className="component-display">
            <div>
                {value}
            </div>
        </div>
    );
};

{/* now this I'm not really sure about yes I watched the video but I learn better from reading, doing and seeing
than from listening to a lecture. */}
{/* what the hell is this? */}
Display.propTypes = {
    value: PropTypes.string
};

export default Display;