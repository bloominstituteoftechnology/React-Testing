import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('should render without crashing', () => {
    shallow(<Display />);
  }); //should render w/o crashing

  it('should render <div className="component-display">', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('.component-display');
    expect(elements.length).toBe(1);
  }); // should render <div className="component-display

  it('should render matched snapshots', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  }); // should render matched snapshots
}); // <Display />
