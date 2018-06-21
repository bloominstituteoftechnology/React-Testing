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
  it('should render a button', () => {
    const component = shallow(<Button />)
    const button = component.find('button')

    expect(button.length).toEqual(1)
  })
  it('clicking the button should call a callback', () => {
    const mySpyGuy = jest.fn(() => {})    
    const button = shallow(<Button clickHandler={mySpyGuy}/>)
    const instance = button.instance()

    instance.handleClick()
    expect(mySpyGuy).toHaveBeenCalledTimes(1)
    instance.handleClick()
    instance.handleClick()
    instance.handleClick()
    instance.handleClick()
    expect(mySpyGuy).toHaveBeenCalledTimes(5)
  })
  it('should render button with correct class name', () => {
    const orangeButton = shallow(<Button orange />)
    const wideButton = shallow(<Button wide />)
    
    expect(orangeButton.find('.component-button').hasClass('orange')).toEqual(true)
    expect(wideButton.find('.component-button').hasClass('wide')).toBe(true)
  })
  it('should invoke its callback with its name when handleClick is invoked', () => {
    const mySpyGuy = jest.fn(() => {})
    
    const button = shallow(<Button clickHandler={mySpyGuy} name="I am a spy, guy" />)
    const instance = button.instance()

    instance.handleClick()
    expect(mySpyGuy.mock.calls[0][0]).toBe("I am a spy, guy")
  })
});