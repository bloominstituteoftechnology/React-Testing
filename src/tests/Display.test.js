import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it.skip('shallow renders without crashing', () => {
    shallow(<Display />);
  });
  it('should render exactly one Display component', () => {
    const display = shallow(<Display />);
    const componentDisplay = display.find(".component-display");
    expect(componentDisplay.length).toEqual(1);
  });
});