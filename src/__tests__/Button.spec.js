import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('check for clickhandler', () => {
    const clickFn = jest.fn()
    const wrapper = mount(<Button clickHandler={clickFn}/>)

    expect(wrapper.props().clickHandler).toBeDefined()
  })

  it ('orange props check', () => {
    const wrapper = mount(<Button orange />)
    expect(wrapper.props().orange).toBe(true)
  })

  it ('wide props check', () => {
    const wrapper = mount(<Button wide />)
    expect(wrapper.props().wide).toBe(true)
  })
});
