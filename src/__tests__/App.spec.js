import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('should render a <Display /> component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div.component-display').length).toBe(1);
  });

  it('should render a <Panel /> component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div.component-panel').length).toBe(1);
  });

});
