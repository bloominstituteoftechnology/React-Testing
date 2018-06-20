import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  })
  it('should render the display and panel components', () => {
    const app = shallow(<App />)
    const display = app.find('Display')
    const panel = app.find('Panel')

    expect(display.length).toEqual(1)
    expect(panel.length).toEqual(1)
  })
  it('should have the correct default state', () => {
    const app = shallow(<App />)
    const instance = app.instance()

    expect(instance.state.total).toBe('0')
    expect(instance.state.next).toBe(null)
    expect(instance.state.operation).toBe(null)
  })
  it('should handleClick properly', () => {
    const app = shallow(<App />)
    const button = app.find('buttonName')
    button.simulate('click')
    expect(jest.fn()).toHaveBeenCalledWith()
  })
});