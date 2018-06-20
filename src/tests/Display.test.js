import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('renders an empty string', () => {
    const props = { value: '0' };
    const wrapper = shallow(<Display { ...props } />);
    const componentDisplay = wrapper.find('.component-display');
    
    expect(componentDisplay.text()).toEqual('0');
  });

  it('should change the display value when button component is clicked', () => {
  });
});