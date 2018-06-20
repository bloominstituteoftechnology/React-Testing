import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />)

describe('<App />', () => {
  it('InitialState is correct', () => {
    const instance = app.instance()
    const state = instance.state
    const expected = {
      total: '0',
      next: null,
      operation: null
    }
    expect(state).toEqual(expected)
  });
  it('renders a component called "Display"', () => {
    const display = app.find('Display')
    expect(display.length).toBe(1)
  })
  it('renders a component called "Panel"', () => {
    const Panel = app.find('Panel')
    expect(Panel.length).toBe(1)
  })
  it('changes state.next to 8 when button "8" is clicked', () => {
    const instance = app.instance()
    const expected = "8"
    instance.handleClick("8")

    expect(instance.state.next).toBe(expected)
  })
  it('changes state to all null, if operator AC is clicked', () => {
    const instance = app.instance()
    const expected = {
      next: null,
      total: null,
      operation: null
    }
    instance.handleClick("AC")

    expect(instance.state).toEqual(expected)
  })
  it('changes state.next to 8 when button "8" is clicked', () => {
    const instance = app.instance()
    const expected = "+"
    instance.handleClick("+")

    expect(instance.state.operation).toBe(expected)
  })
});