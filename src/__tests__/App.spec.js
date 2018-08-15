import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import { toBuffer } from 'ip';

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

    console.log(rootInst)
    //Test
    expect(root.find('Display').props().value).toEqual(stateCase3.next)
    
  })
});
