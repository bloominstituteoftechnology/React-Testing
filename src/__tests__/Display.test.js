import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Display from '../components/Display/Display'

Enzyme.configure({ adapter: new Adapter() })

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Display />, div)
  })

  it('should render a value passed to it as a prop', () => {
    const value = '42'
    const wrapper = shallow(<Display value={value} />)
    expect(wrapper.find('.component-display').render().text()).toEqual(value)
  })
})
