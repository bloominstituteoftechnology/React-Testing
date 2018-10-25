import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  const wrapper = shallow(<Display value={"24"}/>);
  const instance = wrapper.instance();
  it('renders the display', () => {
    const elements = wrapper.find(".component-display")
    expect(elements.length).toBe(1);
  });
});
