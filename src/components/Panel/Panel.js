import React, { Component } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Panel.css';

class Panel extends Component {
    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-panel">
                <div className="(1)4buttonComponent">
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} orange />
                </div>
                <div className="(2)4buttonComponent">
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} orange />
                </div>
                <div className="(3)4buttonComponent">
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} orange />
                </div>
                <div className="(4)4buttonComponent">
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} orange />
                </div>
                <div className="(5)4buttonComponent">
                    <Button name="0" clickHandler={this.handleClick} wide />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} orange />
                </div>
            </div>
        );
    }
}

Panel.propTypes = {
    clickHandler: PropTypes.func,
};

export default Panel;