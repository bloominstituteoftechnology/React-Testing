import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });


describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });

  it('should render Panel component', () => {
    const component = shallow(<App />);
    expect(component.find('Panel')).toHaveLength(1)
  });
  it('should render Display component', () => {
    const component = shallow(<App />);
    expect(component.find('Display')).toHaveLength(1)
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
        instance.handleClick('5')
        expect(instance.state.total).toEqual(null)
        expect(instance.state.next).toEqual('5')
        expect(instance.state.operation).toEqual(null)
        instance.handleClick('+')
        expect(instance.state.total).toEqual('5')    
        expect(instance.state.next).toEqual(null)
        expect(instance.state.operation).toEqual('+')
        instance.handleClick('7')
        expect(instance.state.total).toEqual('5')
        expect(instance.state.next).toEqual('7')
        expect(instance.state.operation).toEqual('+')
        instance.handleClick('=')
        expect(instance.state.total).toEqual('13')    
        expect(instance.state.next).toEqual(null)
        expect(instance.state.operation).toEqual(null)
    
        // // subtraction
        // instance.handleClick('7')
        // expect(instance.state.total).toEqual(null)
        // expect(instance.state.next).toEqual('7')
        // expect(instance.state.operation).toEqual(null)
        // instance.handleClick('5')
        // expect(instance.state.total).toEqual(null)    
        // expect(instance.state.next).toEqual('5')
        // expect(instance.state.operation).toEqual(null)
        // instance.handleClick('-')
        // expect(instance.state.total).toEqual('2')    
        // expect(instance.state.next).toEqual(null)
        // expect(instance.state.operation).toEqual('-')
        // instance.handleClick('9')
        // expect(instance.state.total).toEqual('27')
        // expect(instance.state.next).toEqual('9')
        // expect(instance.state.operation).toEqual('-')
        // instance.handleClick('=')
        // expect(instance.state.total).toEqual('18')    
        // expect(instance.state.next).toEqual(null)
        // expect(instance.state.operation).toEqual(null)
        
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
  });
});