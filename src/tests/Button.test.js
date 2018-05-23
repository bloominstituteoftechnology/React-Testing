import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('displays its name', () => {
    const Name = 'Steve'
    const wrapper = shallow(<Button name={Name} />)
    expect(wrapper.render().text()).toBe(Name)
  })
  
  it('can be an orange button', () => {
    const wrapper = shallow(<Button orange />)
    expect(wrapper.hasClass('orange')).toBeTruthy()
  })
  
  it('can be a wide button', () => {
    const wrapper = shallow(<Button wide />)
    expect(wrapper.hasClass('wide')).toBeTruthy()
  })
  
  it('can be an orange AND wide button', () => {
    const wrapper = shallow(<Button orange wide />)
    expect(wrapper.hasClass('orange')).toBeTruthy()
    expect(wrapper.hasClass('wide')).toBeTruthy()
  })

  describe('click handler', () => {
    it('calls the clickhandler when clicked', () => {
      const handlerMock = jest.fn()
      const wrapper = shallow(<Button clickHandler={handlerMock} />)
      wrapper.find('button').simulate('click')
      expect(handlerMock.mock.calls.length).toBe(1)
    })

    it('calls the clickhandler with the name prop', () => {
      const handlerMock = jest.fn()
      const Name = 'bill'
      const wrapper = shallow(<Button name={Name} clickHandler={handlerMock} />)
      wrapper.find('button').simulate('click')
      expect(handlerMock).toBeCalledWith(Name)
    })
  })
});