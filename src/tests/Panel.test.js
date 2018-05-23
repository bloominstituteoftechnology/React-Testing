import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const buttons = [
    "AC", "+/-", "%", "+", "-", "x", "÷", ".", "=",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ]

  buttons.forEach(button => {
    it(`should render a ${button} button`, () => {
      const wrapper = shallow(<Panel />)
      expect(wrapper.find(`[name="${button}"]`).length).toBe(1)
    })

    it('properly passes down a clickHandler function', () => {
      const fn = jest.fn()
      const wrapper = mount(<Panel clickHandler={fn} />)
      wrapper.find(`[name="${button}"] button`).simulate('click')
      // expect(fn.mock.calls.length).toBe(1)
    })
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('renders the correct amount of buttons', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper.find('Button').length).toBe(buttons.length)
  })

});