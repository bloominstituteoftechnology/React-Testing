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

  it('calls the clickhandler when clicked', () => {
    const handlerMock = jest.fn()
    const wrapper = shallow(<Button clickHandler={handlerMock} />)
    wrapper.find('button').simulate('click')
    expect(handlerMock.mock.calls.length).toBe(1)
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
});