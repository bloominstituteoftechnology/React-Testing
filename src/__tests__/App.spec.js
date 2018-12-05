import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import App from '../App'
import Display from '../components/Display/Display'
import Panel from '../components/Panel/Panel'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe('children', () => {
    it('should render <Display />', () => {
      const wrapper = shallow(<App />)
      const display = wrapper.find(Display)

      expect(display.length).not.toBe(0)
    })

    it('should render <Panel />', () => {
      const wrapper = shallow(<App />)
      const panel = wrapper.find(Panel)
      expect(panel.length).not.toBe(0)
    })
  })
  describe('state', () => {
    it('should have a property on state called "total" which defaults to 0', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.total).toEqual('0')
    })
    it('should have a property on state called "next" which defaults to null', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.next).toBeNull()
    })
    it('should have a property on state called "operation" which defaults to null', () => {
      const wrapper = shallow(<App />)
      const instance = wrapper.instance()
      expect(instance.state.operation).toBeNull()
    })
  })
})
