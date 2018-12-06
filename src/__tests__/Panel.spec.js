import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
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
  it('button changes state of App', () => {
    const wrapper = mount(
      <App>
        <Panel />
      </App>
    );
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '7')
      .simulate('click');
    expect(wrapper.state().next).toBe('7');
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '9')
      .simulate('click');
    expect(wrapper.state().next).toBe('79');
  });
});