import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../setupTests.js';
import App from '../App';

describe('<App />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
  shallow(<App />);
  });

  it('renders a div with a component-app class', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('div.component-app');

    expect(elements.length).toBe(1);
  });

  it('should have a default state of total: 0, next: null, and operation: null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });
});
