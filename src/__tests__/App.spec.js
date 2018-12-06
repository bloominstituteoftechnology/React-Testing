import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it.skip('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should have state set to zero upon load', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  });

  it('should pass the value zero to the display upon load', () => {
    const wrapper = shallow(<App />);
    const display = wrapper.find('Display');

    expect(display.props()).toEqual({ value: '0' });
  });

  it('should render a div with component-app class', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div.component-app').length).toBe(1);
  });
});
