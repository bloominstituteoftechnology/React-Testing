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
});