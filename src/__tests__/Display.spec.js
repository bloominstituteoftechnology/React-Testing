import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('has a component-display div', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('div.component-display');

    expect(elements.length).toBe(1);
  });

});
