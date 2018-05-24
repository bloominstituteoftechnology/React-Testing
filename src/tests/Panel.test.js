import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Panel from '../components/Panel/Panel'

Enzyme.configure({ adapter: new Adapter() })

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Panel />, div)
  })

  it('has 19 buttons', () => {
    const wrapper = shallow(<Panel />)
    expect(wrapper.find('Button').length).toBe(19)
  })

  // it('calls the clickhandler', () => {
  //   const mockHandler = jest.fn()
  //   const wrapper = shallow(<Panel clickHandler={mockHandler} />)
  //   expect(
  //     wrapper
  //       .find('Button')
  //       .first()
  //       .props().clickHandler
  //   ).toBe(mockHandler)
  // })
})
