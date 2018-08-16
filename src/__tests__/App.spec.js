import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('passes the correct value to the Display component', () => {
    //Initialize Shallow reference to root    
    const root = shallow(<App />)

    //Initialize a root instance to update state
    let rootInst = root.instance()
    
    // ***  Case 1 - state as is: *****
    //next = null
    //total = '0'
    expect(root.find('Display').props().value).toEqual("0")
    
    
    
    // ***  Case 2:  ******
    //next = null
    //total = '5'
    const stateCase2 = {
      total : '5',
      next : null,
      operation : null
    }
    
    //Update the state:
    root.setState(stateCase2)

    //Test
    expect(root.find('Display').props().value).toEqual(stateCase2.total)

    
    
    // ***  Case 3:  ******
    //next = {testkey:"testvalue"}
    //total = '5'
    const stateCase3 = {
      total : null,
      next : "5",
      operation : null
    }
    
    //Update the state:
    root.setState(stateCase3)

    //Test
    expect(root.find('Display').props().value).toEqual(stateCase3.next)
    
  })

  it('should test handleClick() by calculating 1123 + 5', () => {
    const root = shallow(<App />)
    const inst = root.instance()

    inst.handleClick('1')
    expect(inst.state.next).toEqual('1')

    inst.handleClick('1')
    expect(inst.state.next).toEqual('11')
    
    inst.handleClick('2')
    expect(inst.state.next).toEqual('112')

    inst.handleClick('3')
    expect(inst.state.next).toEqual('1123')

    inst.handleClick('+')
    expect(inst.state.total).toEqual('1123')
    expect(inst.state.operation).toEqual('+')
    expect(inst.state.next).toEqual(null)
    
    inst.handleClick('5')
    expect(inst.state.next).toEqual('5')
    
    inst.handleClick('=')
    expect(inst.state.total).toEqual('1128')
    expect(inst.state.operation).toEqual(null)
    expect(inst.state.next).toEqual(null)
  })


});
