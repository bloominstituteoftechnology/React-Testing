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

  it('should render a div with class `component-panel`', () => {
    const panel = shallow(<Panel />);
    expect(panel.find('.component-panel')).toHaveLength(1);
  });

  it('should have a function called handleClick', () => {
    const panel = shallow(<Panel />);
    const instance = panel.instance();
    expect(instance.handleClick).toBeDefined();
  });
});
