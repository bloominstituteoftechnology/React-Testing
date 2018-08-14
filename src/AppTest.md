import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
    shallow(<App />);
});

it('should display "I can test React components" if no title is provided', () => {
    const app = shallow(<App />);

    const paragraph = app.find('.App-intro');

    expect(paragraph.text()).toEqual('Welcome to React');
});

it('should display a title passed as a prop', () => {
    const app = shallow(<App title="a title" />);

    const paragraph = app.find('.App-intro');

    expect(paragraph.text()).toEqual('a title');
});

it('should have a way to show if the switch is on or off', () => {
    const app = shallow(<App />);

    const display = app.find('.display');

    expect(display.text()).toEqual('off');
});

it('should be off by default', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    expect(instance.state.isOn).toEqual(false);
});

it('should have a button to toggle the on/off switch', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    const button = app.find('.toggle-btn');

    // it's off
    expect(instance.state.isOn).toEqual(false);
    // we toggle it by clicking the button
    button.simulate('click');
    // it's on
    expect(instance.state.isOn).toEqual(true);
    // we toggle it by clicking the button
    button.simulate('click');
    // it's off
    expect(instance.state.isOn).toEqual(false);
});

it('should display the state of the switch', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    const button = app.find('.toggle-btn');
    const display = app.find('.display');

    expect(display.text()).toEqual('off');
    button.simulate('click');
    // app.update();
    expect(display.text()).toEqual('on');
    button.simulate('click');
    // app.update();
    expect(display.text()).toEqual('off');
});
/*
* should display "I can test React components" if no title is provided.
* should display a title passed as a prop.
- should have a way to show if the switch is on or off.
* should be off by default.
- should have a button to toggle the on/off switch. 
*/

// access the .App-intro, check the text inside