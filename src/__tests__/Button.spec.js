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

  it('renders a div with 1 child', () => {
    const wrapper = shallow(<Button />);
    const div = wrapper.find('div')
    expect(div.length).toBe(1)
    expect(div.children.length).toBe(1)
  });

  it('renders a button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1)
  });

});
