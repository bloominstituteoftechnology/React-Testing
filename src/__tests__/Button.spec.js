import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../components/Button/Button';

describe('<Button />', () => {
  const wrapper = (shallow(<Button />))

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should shallow render without crashing', () => {
    wrapper;
  })
  it('should have a div with a className of "component-button"', () => {
    expect(wrapper.find('div').hasClass('component-button')).toBe(true);
  })
  it('should have a button component', () => {
    expect(wrapper.find('div.button')).tobeTruthy;
  })
  it('should check it button component exists', () => {
    expect(wrapper.find('div').exists('button')).tobeTruthy;
  })
});
