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

  it('contains the class component-display', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display').length).toBe(1);
  })

  it('should accept and display some value', () => {
    const component = shallow(<Display value='53' />);
    expect(component.contains(<div>53</div>)).toBeTruthy();
  })
});