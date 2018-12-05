import React from 'react'
import { shallow } from 'enzyme'

import Display from '../components/Display/Display'

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />)
  })

  it('should render a div with component-display class', () => {
    const wrapper = shallow(<Display />)

    expect(wrapper.find('div.component-display').length).toBe(1)
  })

  it('should render a second div', () => {
    const wrapper = shallow(<Display />)

    expect(
      wrapper.find('div.component-display').render()[0].children[0].name
    ).toBe('div')
  })

  it('should render a passed value prop', () => {
    const wrapper = shallow(<Display value="9" />)

    expect(
      wrapper
        .find('div.component-display')
        .children()
        .render()[0].children[0].data
    ).toBe('9')
  })
})
