import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Display from '../components/Display/Display'

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
