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
  it('should have a div wrapper', () => {
    const wrapper = shallow(<Panel />);
      expect(wrapper.find('div').exists()).toBe(true);
  })
});