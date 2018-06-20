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

  it('should render a div with class component-display', () => {
    const display = shallow(<Display />);
    const compDisplay = display.find('.component-display');
    expect(compDisplay.length).toEqual(1);
  });

  it("should work as expected", () => {
    const display = shallow(<Display value={"string"} />);
    expect(display.find("value")).toBeTruthy();
  });

});