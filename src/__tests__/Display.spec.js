import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Display from '../components/Display/Display';

describe('<Display />', () => {
  const wrapper = (shallow(<Display />))
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should shallow render without crashing', () => {
    wrapper;
  })
  it('should have the first div with a className of "component-display"', () => {
    expect(wrapper.find('div').first().hasClass('component-display')).toBe(true);
  })
  it('should pass value to div children', () => {
    wrapper.setProps({ value: '1203' });
    expect(wrapper.contains('1234')).toBeTruthy;
  })
  it('should pass "1203" value to div children and match', () => {
    wrapper.setProps({ value: '1203' });
    expect(wrapper.find('div').last().text()).toBe('1203');
  })
});
