import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('should render a div with the className "component-button"', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div.component-button').length).toBe(1);
  });
  it('should handle click when clicked', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button clickHandler={mockFunction} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);
    button.simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction.mock.calls.length).toBe(2);
  });
});
