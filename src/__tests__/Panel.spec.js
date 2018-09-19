import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('shallow renders without crashing',  () => {
    shallow(<Panel />);
  });
  it('renders within <App />', () => {
    const wrapper = mount(<App><Panel /></App>);
    expect(wrapper.find('button').length).toBe(19);
  });
  it('checks the function of a button', () => {
    const wrapper = mount(<App><Panel /></App>);
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
