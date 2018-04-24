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
  // it('displays the value as a string', () => {
  //   const display = shallow(<Display />);
  //   expect(display.find('div.value')).toHaveProperty
  // });
  it('contains a component-display class', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper.find('div.component-display')).toHaveLength(1);
  });
  it('returns the value passed into the display', () => {
    const disp = shallow(<Display value = {'1'}/>);
    expect(disp.contains(
      <div>
        1
        </div>
    )).toEqual(true);
  })
  it("should render a value", () => {
		const component = shallow(<Display />);
		expect(component.find("value"));
	});
  it('renders the value as a string', () => {
    const disp = shallow(<Display value = {`string`} />);
    expect(disp.props().children.props.children).toBe(`string`);
  });


  //TODO: Test if value is a string...

});