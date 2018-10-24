import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const wrapper = shallow(<Display />);
  //Check if render Display
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  //Check if renders a component-panel class
  it('renders a "component-panel" class', ()=>{
    const elements = wrapper.find("div.component-display");
    expect(elements.length).toBe(1);
  })
});
