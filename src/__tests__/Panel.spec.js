import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('should render without crashing', () => {
    shallow(<Panel />);
  }) // should render without crashing

  it('should render matched snapshots', () => {
    const tree = renderer.create(<Panel />).toJSON();
    expect(tree).toMatchSnapshot();
  }); // should render matched snapshots

  it('should render all buttons', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find("Button").length;
    expect(buttons).toBe(19);
  }) // should render all buttons

  it('should render <div className="component-panel">', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('.component-panel');
    expect(elements.length).toBe(1);
  });	// should render <div className="component-panel
}); // <Panel />
