import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from '../components/Button/Button'

Enzyme.configure({ adapter: new Adapter() })

describe('<Button />', () => {
  let props
  let mountedButton

  const button = () => {
    if (!mountedButton) {
      mountedButton = mount(<Button {...props} />)
    }
    return mountedButton
  }

  beforeEach(() => {
    props = {
      name: undefined,
      clickHandler: jest.fn(),
    }
    mountedButton = undefined
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('div should have classname "component-button"', () => {
    const div = button().find('div')
    expect(div.hasClass('component-button')).toBe(true)
  })

  describe('when name\'s value is "AC"', () => {
    beforeEach(() => (props.name = 'AC'))

    it('should receive name prop with value AC', () => {
      expect(button().props().name).toBe('AC')
    })

    it('the rendered text should be AC', () => {
      expect(button().text()).toBe('AC')
    })
  })

  describe('when name\'s value is "+/-"', () => {
    beforeEach(() => (props.name = '+/-'))

    it('should receive name prop with value +/-', () => {
      expect(button().props().name).toBe('+/-')
    })

    it('the rendered text should be +/-', () => {
      expect(button().text()).toBe('+/-')
    })
  })

  describe('when prop `orange` is passed', () => {
    beforeEach(() => (props.orange = true))

    it('div should have classname "component-button orange"', () => {
      const div = button().find('div')
      expect(div.hasClass('component-button orange')).toBe(true)
    })
  })

  describe('when prop `wide` is passed', () => {
    beforeEach(() => {
      button().setProps({ wide: true })
    })

    it('div should have classname "component-button  wide"', () => {
      const div = button().find('div')
      /* two spaces between 'component-button' and 'wide' 🤷‍ */
      expect(div.hasClass('component-button  wide')).toBe(true)
    })
  })

  it('should handle click', () => {
    const btn = button().find('button')
    btn.simulate('click')
    expect(props.clickHandler).toHaveBeenCalled()
  })
})
