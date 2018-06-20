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

  it('should contain a wrapper div',() => {
    const wrapper = shallow(<Display/>);
    expect(wrapper.find('div').exists()).toBe(true);
  });

//  it('should display a number', () => {
//    const dv = shallow(<Display value={'10'} />);
//    expect(dv.find('10').exists()).toBe(true);
//  });

});
