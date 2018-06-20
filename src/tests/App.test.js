import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button from '../components/Button/Button'

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders exactly one Display component', () => {
    const app = shallow(<App />)

    const display = app.find('Display')

    expect(display.length).toEqual(1)
  })
  it('renders exactly one Panel component', () => {
    const app = shallow(<App />)

    const panel = app.find('Panel')

    expect(panel.length).toEqual(1)
  })
  it('should initalize with state = { total: "0", next: null, operation: null }', () => {
    const app = shallow(<App />)

    expect(app.state().total).toEqual('0')
    expect(app.state().next).toEqual(null)
    expect(app.state().operation).toEqual(null)
  })
  it('should change state if the button is clicked', () => {
    const app = shallow(<App />)
    const instance = app.instance()
    
    //addition
    instance.handleClick('6')
    expect(instance.state.total).toEqual(null)
    expect(instance.state.next).toEqual('6')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('+')
    expect(instance.state.total).toEqual('6')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual('+')
    instance.handleClick('8')
    expect(instance.state.total).toEqual('6')
    expect(instance.state.next).toEqual('8')
    expect(instance.state.operation).toEqual('+')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('14')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual(null)

    // subtraction
    instance.handleClick('2')
    expect(instance.state.total).toEqual(null)
    expect(instance.state.next).toEqual('2')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('7')
    expect(instance.state.total).toEqual(null)    
    expect(instance.state.next).toEqual('27')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('-')
    expect(instance.state.total).toEqual('27')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual('-')
    instance.handleClick('9')
    expect(instance.state.total).toEqual('27')
    expect(instance.state.next).toEqual('9')
    expect(instance.state.operation).toEqual('-')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('18')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual(null)
    
    // multiplication
    instance.handleClick('8')
    expect(instance.state.total).toEqual(null)
    expect(instance.state.next).toEqual('8')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('x')
    expect(instance.state.total).toEqual('8')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual('x')
    instance.handleClick('7')
    expect(instance.state.total).toEqual('8')
    expect(instance.state.next).toEqual('7')
    expect(instance.state.operation).toEqual('x')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('56')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual(null)

    // division
    instance.handleClick('2')
    expect(instance.state.total).toEqual(null)
    expect(instance.state.next).toEqual('2')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('7')
    expect(instance.state.total).toEqual(null)    
    expect(instance.state.next).toEqual('27')
    expect(instance.state.operation).toEqual(null)
    instance.handleClick('÷')
    expect(instance.state.total).toEqual('27')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual('÷')
    instance.handleClick('2')
    expect(instance.state.total).toEqual('27')
    expect(instance.state.next).toEqual('2')
    expect(instance.state.operation).toEqual('÷')
    instance.handleClick('=')
    expect(instance.state.total).toEqual('13.5')    
    expect(instance.state.next).toEqual(null)
    expect(instance.state.operation).toEqual(null)
  })
});