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
  const wrapper = shallow(<Panel />);
  it('renders the panel', () => {
    const elements = wrapper.find("div.component-panel");
    expect(elements.length).toBe(1);
  });
  it('renders the buttons', () => {
    const elements = wrapper.find("Button");
    expect(elements.length).toBe(19);
  });
});
