import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should have a div with the classname: "component-display"', () => {
    const wrapper = shallow(<Display/>)
    const elements = wrapper.find("div.component-display")
    expect(elements.exists()).toBe(true)
  });

  it('should have a div with the value of "0"', () => {
    const wrapper = shallow(<Display value={"0"}/>)
    const elements = wrapper.find("div.component-display div")
    expect(elements.text()).toBe("0")
  });

  it('renders a child div inside the main div', () => {
		const wrapper = shallow(<Display />);
		const children = wrapper.find('div.component-display').children();
		expect(children.find('div').length).toBe(1);
	});
});
