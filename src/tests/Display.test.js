import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it("has one div", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div").children("div")).toHaveLength(1);
  });
  it("should contain a wrap", () => {
    const wrapper = shallow(<Display />);
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("component-display")
    ).toEqual(true);
  });
  it("should display props value", () => {
    const wrapper = shallow(<Display value='20' />)
    expect(wrapper.find('div>div').text()).toEqual('20')
  });
});