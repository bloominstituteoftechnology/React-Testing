import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('executes clickHandler with names prop', () => {
    let name = 'blob';
    let output;
    function clickHandler(input) {
      output = input;
    }
    const button = shallow(<Button name={name} clickHandler={clickHandler} />)
    const divButton = button.find('.component-button > button');
    divButton.simulate('click');
    expect(output).toEqual(name);
  })
  it('receives classNames from props', () => {
    const button = shallow(<Button orange wide />);
    const divButton = button.find('.component-button');
    expect(divButton.hasClass('orange')).toEqual(true);
    expect(divButton.hasClass('wide')).toEqual(true);
  })
  it('If no orange or wide props are passed button only has component-button class', () => {
    const button = shallow(<Button />);
    const divButton = button.find('.component-button');
    expect(divButton.hasClass('orange')).toEqual(false);
    expect(divButton.hasClass('wide')).toEqual(false);
  })
});
