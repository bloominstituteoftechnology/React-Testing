import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Display from '../components/Display/Display'

configure({ adapter: new Adapter() })

describe('<Display />', () => {
  const wrapper = shallow(<Display />)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Display />, div)
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should be able to give value to props', () => {
    wrapper.setProps({ value: '1234' })
    expect(wrapper.contains('1234')).toBeTruthy()
  })

  it('should show "988" text when value is given to props', () => {
    wrapper.setProps({ value: '988' })
    expect(
      wrapper
        .find('div')
        .children()
        .first()
        .text(),
    ).toBe('988')
  })

  it('should have classname "component-display"', () => {
    expect(wrapper.hasClass('component-display')).toBeTruthy()
  })
})
