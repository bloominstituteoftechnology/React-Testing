import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

// Write test here

describe('<Display />', () => {
  it('Renders without crashing.', () => {
    shallow(<Display />);
  });

  it('Renders a div.', () => {
    const props = { value: '0' };

    const display = shallow(<Display {...props} />);
    const value = display.find('.component-display').text();

    expect(value).toEqual('0');
  });  
});