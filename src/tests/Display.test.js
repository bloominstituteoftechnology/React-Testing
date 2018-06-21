import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<Display />', () => {

  it('renders without crashing', () => {
    shallow(<Display/>);
  });

  // render
  it('renders a div with component-display class', () => {
    const display = shallow(<Display/>);
    const div = display.find('.component-display');
    expect(div.length).toBe(1);
  });
  it('renders one child div of component-display', () => {
    const display = shallow(<Display/>);
    const div = display.find('.component-display > div');
    expect(div.length).toBe(1);
  });

  // props
  it('renders the value 0.07 when passed to its props', () => {
    const props = { value: '0.07'};
    const display = shallow(<Display {...props} />);
    const div = display.find('.component-display > div');
    expect(div.text()).toEqual('0.07');
  });
  it('renders the value -0.07 when passed to its props', () => {
    const props = { value: '-0.07'};
    const display = shallow(<Display {...props} />);
    const div = display.find('.component-display > div');
    expect(div.text()).toEqual('-0.07');
  });

});