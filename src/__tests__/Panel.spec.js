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

  it("should display 19 buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("Button")).toHaveLength(19);
  });

   it('should have className .component-panel with five children', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.component-panel').children()).toHaveLength(5);
  });
  
});
