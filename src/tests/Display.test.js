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

  it('should be the same as the snapshot', () => {
    const display = shallow(<Display />);
    expect(display).toMatchSnapshot();
  });

  it('should display props that are passed to it', () => {
    const display = shallow(<Display value="100" />);
    expect(display.text()).toBe('100');
  });

  it('should have a wrapperclass in a div', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});