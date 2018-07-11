import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'
import Panel from '../components/Panel/Panel'
import Display from '../components/Display/Display'
import calculate from '../logic/calculate'

jest.mock('../logic/calculate')

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper
  let instance

  beforeAll(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('renders correctly', () => {
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
      expect(instance.state.next).toBe(null)
    })

    it("state's operation should initially be null", () => {
      expect(instance.state.operation).toBe(null)
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

    it('rendered Display receives one prop', () => {
      expect(Object.keys(display.props()).length).toBe(1)
    })

    it('renders Display with updated state total', () => {
      expect(display.props().value).toBe('888')
    })

    it('rendered Panel receives one prop', () => {
      expect(Object.keys(panel.props()).length).toBe(1)
    })
  })

  it('handleClick method should call calculate', () => {
    instance.handleClick()
    instance.handleClick()
    instance.handleClick()
    expect(calculate).toHaveBeenCalledTimes(3)
  })
})
