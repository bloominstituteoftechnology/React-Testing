import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it("Should have value of 10", () => {
    const wrapper = shallow(
      <Display value={"10"}/>
    );
    expect(wrapper).toMatchSnapshot()
  });

  it("should contain a wrap", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div").first().hasClass("component-display")).toEqual(true);
  });
});