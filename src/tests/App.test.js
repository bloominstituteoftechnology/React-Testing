import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';

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
  it('simulates click handler', () => {
    const handleClick = sinon.spy();
    const app = mount((<App clickHandler={handleClick} />))
    const panel = app.find(Panel)
    panel.props().clickHandler = app.props().clickHandler()
    const button = panel.find('[name="7"]').find('.component-button').children()
    button.simulate('click')
    expect(handleClick.calledOnce).toEqual(true);
  })

});