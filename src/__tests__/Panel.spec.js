import React from 'react'
import { shallow, mount } from 'enzyme'

import Panel from '../components/Panel/Panel'

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />)
  })

  it('should render a div with component-panel class', () => {
    const wrapper = shallow(<Panel />)

    expect(wrapper.find('div.component-panel').length).toBe(1)
  })

  it('should render a div with 5 child divs', () => {
    const wrapper = shallow(<Panel />)

    expect(wrapper.find('div.component-panel').children().length).toBe(5)
  })

  it('should execute the corrent number of clicks', () => {
    const mockFunction = jest.fn()
    const wrapper = mount(<Panel clickHandler={mockFunction} />)

    wrapper
      .find('div.component-panel')
      .children()
      .children()
      .children()
      .find('button')
      .forEach(item => item.simulate('click'))

    expect(mockFunction).toHaveBeenCalledTimes(19)
  })
})
