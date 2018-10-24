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

  //correct number of buttons
  it('should have 19 buttons',  () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('Button')
    expect(elements.length).toEqual(19);
  })

  //should have props
  it('should have props', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.props().children).toBeTruthy();
  })
});
