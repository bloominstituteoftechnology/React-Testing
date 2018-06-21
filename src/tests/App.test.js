import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('should by default have total = "0"', () => {
    const _App = shallow(<App/>)
    const instance = _App.instance()
    expect(instance.state.total).toEqual('0')
  })

  it('should by default have next and operation set to null', () => {
    const _App = shallow(<App/>)
    const instance = _App.instance()
    expect(instance.state.next).toBe(null)
    expect(instance.state.operation).toBe(null)    
  })

  it('should update the state when handleClick is called', () => {
    const _App = shallow(<App/>)
    const instance = _App.instance()
    const numberButton = '5'
    const operationButton = '+'

    expect(instance.state.next).toBe(null)
    instance.handleClick(numberButton)
    expect(instance.state.next).toEqual('5')
    instance.handleClick(operationButton)
    expect(instance.state.operation).toEqual('+')
  })
});
