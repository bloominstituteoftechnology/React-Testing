import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders 19 Buttons', () => {
    const component = shallow(<Panel />);
    expect(component.find('Button')).toHaveLength(19);
  });
  it('renders a button named "0", with property "wide"', () => {
    const wrapper = mount(<Panel />);
    // console.log(wrapper.find({ name: '0' })).toHaveLength(1);
    const rendered = wrapper.find('Button');
    expect(wrapper.find({ value: 'food' }).everyWhere(n => n.prop('name') === "0"));
  });
});