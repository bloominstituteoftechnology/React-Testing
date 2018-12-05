import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  }); 

  it('renders matched snapshots', () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  }); 

  it('renders all (19) buttons', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find("Button").length;
    expect(buttons).toBe(19);
  });

  it('renders <div className="component-panel">', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('.component-panel');
    expect(elements.length).toBe(1);
  });
}); 