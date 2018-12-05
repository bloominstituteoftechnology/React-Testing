import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });  

  it('renders <div className="component-display">', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('.component-display');
    expect(elements.length).toBe(1);
  });  

  it('renders matched snapshots', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });  
}); 