import React from 'react';
import { shallow, mount } from 'enzyme';



import Panel from '../components/Panel/Panel';



describe('<Panel />', () => {
  it('renders shallow without crashing', () => {
    shallow(<Panel />);
  });
  it('renders within <App />', () => {
    const wrapper = mount(
      <App>
        <Panel />
      </App>
    );
    expect(wrapper.find('button').length).toBe(19);
    expect(wrapper.find('.component-panel').length).toBe(1);
  });
});
