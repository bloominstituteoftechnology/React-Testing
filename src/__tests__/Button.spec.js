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

  it('should render the name prop', () => {
    const name = "8";
    const wrapper = shallow(<Button name={name} />);
    const button = wrapper.find('button');

    expect(button.text()).toEqual('8');
  });

  it('should perform click using name prop', () => {
    let name = 'example';
    let output;
    function clickHandler(input) {
      output = input;
    }
    const button = shallow(<Button name={name} clickHandler={clickHandler} />);
    const divButton = button.find('.component-button > button');
    divButton.simulate('click');
    expect(output).toEqual(name);
  });
});
