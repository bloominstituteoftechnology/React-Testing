import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('toggles button and value is delivered', () => {
    const wrapper = mount(<Panel />); 
    const instance = wrapper.instance();
    
    const button = wrapper.find('Button').first();
    
    button.simulate('click');

    expect(instance.state.next).toEqual(name);
  });
});
