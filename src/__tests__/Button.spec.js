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

  //should have a button
  it('renders the button', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('button')
    expect(elements.length).toEqual(1);
  })

  //should have props
  it('should have props', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.props().children).toBeTruthy();
  })
});
