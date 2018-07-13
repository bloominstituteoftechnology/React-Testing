import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Panel from '../components/Panel/Panel'

configure({ adapter: new Adapter() })

describe('<Panel />', () => {
  const props = { clickHandler: jest.fn() }
  const wrapper = shallow(<Panel {...props} />)
  const mountWrapper = mount(<Panel {...props} />)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Panel />, div)
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a div with classname "component-panel"', () => {
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('component-panel'),
    ).toBeTruthy()
  })

  it('should render 5 div containers for buttons', () => {
    expect(wrapper.find('div > div').length).toBe(5)
  })

  it('should render 19 buttons', () => {
    expect(mountWrapper.find('button').length).toBe(19)
  })

  it('should have a button with attribute "name" and value "AC"', () => {
    expect(wrapper.find('[name="AC"]').length).toBe(1)
  })

  it('should have a button that has contains "8"', () => {
    expect(mountWrapper.find('button').contains('8')).toBeTruthy()
  })
})
