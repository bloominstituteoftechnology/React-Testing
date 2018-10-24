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

  test('should render a panel component', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div.component-panel');

    expect(elements.length).toBe(1);
  });

  test('should render five panel rows', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div.panel-row');

    expect(elements.length).toBe(5);
  });


});
