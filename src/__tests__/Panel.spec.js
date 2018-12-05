import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should shallow render without crashing', () => {
    shallow(<Panel />);
  });

  it('should render the component panel', () => {
    const wrapper = shallow(<Panel />);
    const componentPanel = wrapper.find('.component-panel');

    expect(componentPanel.length).toBe(1);
  });

  it('should render 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(19);
  });
});
