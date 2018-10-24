import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../setupTests.js';
import Display from '../components/Display/Display';


describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('renders a div with a component-display class', () => {
    const wrapper = shallow(<Display />);

    const elements = wrapper.find('.component-display');

    expect(elements.length).toBe(1);
  });
});
