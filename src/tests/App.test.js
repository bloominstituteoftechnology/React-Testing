import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'
import Panel from '../components/Panel/Panel'
import Display from '../components/Display/Display'
import calculate from '../logic/calculate'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper
  let instance

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have className "component-app"', () => {
    expect(wrapper.hasClass('component-app')).toBe(true)
  })

  describe('App state', () => {
    it("state's total should start at 0", () => {
      expect(instance.state.total).toBe('0')
    })

    it("state's next should initially be null", () => {
      expect(instance.state.next).toBeNull()
    })

    it("state's operation should initially be null", () => {
      expect(instance.state.operation).toBeNull()
    })
  })

  describe('rendered children', () => {
    let display
    let panel

    beforeEach(() => {
      wrapper.setState({ total: '888' })
      display = wrapper.find(Display)
      panel = wrapper.find(Panel)
    })

    it('App should have two children', () => {
      expect(wrapper.find('div').children().length).toBe(2)
    })

    it('App should render Display', () => {
      expect(wrapper.find(Display)).toHaveLength(1)
    })

    it('App should render Panel', () => {
      expect(wrapper.find(Panel)).toHaveLength(1)
    })

    it('rendered Display should receive one prop', () => {
      expect(Object.keys(display.props()).length).toBe(1)
    })

    it('renders Display with updated state total', () => {
      expect(display.props().value).toBe('888')
    })

    it('rendered Panel receives one prop', () => {
      expect(Object.keys(panel.props()).length).toBe(1)
    })
  })

  describe('handleClick method', () => {
    it('should update state.next to "8.88"', () => {
      instance.handleClick('8')
      instance.handleClick('.')
      instance.handleClick('8')
      instance.handleClick('8')
      expect(instance.state.next).toEqual('8.88')
    })
  })

  it('should update state.total to "888" when adding', () => {
    instance.handleClick('800')
    instance.handleClick('+')
    instance.handleClick('80')
    instance.handleClick('+')
    instance.handleClick('8')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('888')
  })

  it('should update state.total to "888" when subtracting', () => {
    instance.handleClick('900')
    instance.handleClick('-')
    instance.handleClick('12')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('888')
  })

  it('should update state.total to "888" when dividing', () => {
    instance.handleClick('1776')
    instance.handleClick('÷')
    instance.handleClick('2')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('888')
  })

  it('should update state.total to "888" when multiplying', () => {
    instance.handleClick('296')
    instance.handleClick('x')
    instance.handleClick('3')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('888')
  })

  it('should update state.total to "8" when using modulo operator', () => {
    instance.handleClick('8')
    instance.handleClick('%')
    instance.handleClick('100')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('8')
  })

  it('should update state null when "AC" is pressed', () => {
    instance.handleClick('8')
    instance.handleClick('AC')
    expect(instance.state).toEqual({ total: null, next: null, operation: null })
  })

  it('should update state.next to negative integer', () => {
    instance.handleClick('8')
    instance.handleClick('+/-')
    expect(instance.state.next).toEqual('-8')
  })
})
