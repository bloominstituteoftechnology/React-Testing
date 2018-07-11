import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Panel from '../components/Panel/Panel'

Enzyme.configure({ adapter: new Adapter() })

describe('<Panel />', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Panel clickHandler={jest.fn()} />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Panel />, div)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 6 divs', () => {
    expect(wrapper.find('div').length).toBe(6)
  })

  it('should render buttons', () => {
    expect(wrapper.find('button').length).toBe(10)
  })
})
