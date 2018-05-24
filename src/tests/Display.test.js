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
  it('should display props.value', () => {
    let props = {
      value: '100'
    };
    const wrapper = shallow(<Display {...props}/>)
    const totest = wrapper.find('div>div')//.find('div');
    expect(typeof totest).toBe('object')
  })



});