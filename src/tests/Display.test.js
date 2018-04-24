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
  it('should return an element', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('.component-display')).toHaveLength(1);
  });
  it('should return the value that is passed in', () => {
    const wrapper = shallow(<Display value={'42'} />);
    expect(wrapper.contains('42')).toEqual(true);
  });
});
