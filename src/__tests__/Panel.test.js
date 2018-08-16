import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Panel from '../components/Panel/Panel'

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Panel />, div)
  })
  it('should render a div with class "component-panel"', () => {
    const component = shallow(<Panel />)
    expect(component.find('.component-panel')).toHaveLength(1)
  })
  it('should render 19 Buttons', () => {
    const component = shallow(<Panel />)
    expect(component.find('Button')).toHaveLength(19)
  })
})
