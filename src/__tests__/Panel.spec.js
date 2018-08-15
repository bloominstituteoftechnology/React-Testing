import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('renders a div with className `component-panel`', () => {
    const component = shallow(<Panel />);
    expect(component.find('.component-panel')).toHaveLength(1);
  });

  it('renders 19 buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });
});
