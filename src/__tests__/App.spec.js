import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';
import Panel from '../components/Panel/Panel'
import Button from '../components/Button/Button'

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should render a Display component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Display').length).toBe(1);
  });

  it('should render a Panel component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Panel').length).toBe(1);
  });

  it('should be null initially', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });

  it('should be 0 initially', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
	});
	
  it('App state changes on click', () => {
    const clickFunction = jest.fn();
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
    const panel = shallow(<Panel clickHandler={clickFunction} />)
    const button = shallow(<Button name='9' clickHandler={clickFunction} />)
    button.find('button').simulate('click');

    expect(clickFunction).toHaveBeenCalled();
  });
});
