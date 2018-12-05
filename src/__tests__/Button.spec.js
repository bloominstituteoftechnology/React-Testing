import React from 'react'
import { shallow } from 'enzyme'

import Button from '../components/Button/Button'

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />)
  })

  it('should render a button', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.find('button').length).toBe(1)
  })

  it('should render a button with a name', () => {
    const wrapper = shallow(<Button name="9" />)

    expect(wrapper.find('button').render()[0].children[0].data).toBe('9')
  })

  it('should execute a passed function on click', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Button clickHandler={mockFunction} />)

    wrapper.find('button').simulate('click')

    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
