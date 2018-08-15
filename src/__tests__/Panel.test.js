import React from 'react';
import { shallow, mount } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  const panel = shallow(<Panel />);
  const mountPanel = mount(<Panel />); 

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render exactly 19 Button components', () => {
    const button = panel.find('Button');
    expect(button.length).toEqual(19);
  });

  it('should render exactly 5 orange buttons', () => {
    const orange = mountPanel.findWhere(b => b.hasClass('orange'));
    expect(orange.length).toEqual(5);
  });

  it('should render exactly 1 wide button', () => {
    const wide = mountPanel.findWhere(b => b.hasClass('wide'));
    expect(wide.length).toEqual(1);
  });

  it('should have an equals button', () => {
    expect(mountPanel.find('button').contains('=')).toBeTruthy();
  });
});