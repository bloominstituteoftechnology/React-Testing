import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../setupTests.js';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Panel />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('renders a div with a component-panel class', () => {
    const wrapper = shallow(<Panel />);

    const elements = wrapper.find('.component-panel');

    expect(elements.length).toBe(1);
  });
  
});
