import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });


describe('Button Snapshot', () => {
    
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button />).toJSON()
    
    expect(tree).toMatchSnapshot()
    
  })
});

/*
Figure out the contract
- always renders a div
- when props.orange is passed, the div ==> has the correct className
- when props.wide is passed, the div ==> has the correct className
- when props.clickHandler is passed and clicked ==>  the argument of the function is the name

*/

describe("Button", () => {
  //Create variables available in the entire describe function
  let props;
  let mountedButton;

  //Create a button function that either mounts the Button with
  //the current props or returns the one already mounted
  const button = () => {
    if (!mountedButton) {
      mountedButton = mount(<Button {...props} />);
    }
    return mountedButton
  }

  //Reset the state of the test to a know starting point
  beforeEach(() => {
    props = {
      name : undefined,
      handleClick : undefined,
      orange : undefined,
      wide : undefined,
    }
    mountedButton = undefined;
  })

  it('always renders a div', () => {
    const divs = button().find('div');
    expect(divs.length).toBeGreaterThan(0);
  })

  describe('when props.orange is passed, the div', () => {
    
    //Set the props:
    beforeEach(()=> {
      props.orange = true;
    })
    
    it('has the correct className', () => {
      //Grab the div
      const classNames = button().find('div').props().className
      
      //See if the className is correct:
      expect(classNames).toContain('component-button')
      expect(classNames).toContain('orange')
      expect(classNames).not.toContain('wide')
    })    
  })

  describe('when props.wide is passed, the div', () => {
    
    //Set the props:
    beforeEach(()=> {
      props.wide = true;
    })
    
    it('has the correct className', () => {
      //Grab the div
      const classNames = button().find('div').props().className
      
      //See if the className is correct:
      expect(classNames).toContain('component-button')
      expect(classNames).toContain('wide')
      expect(classNames).not.toContain('orange')
    })    
  })

  describe('when the props.clickHandler is passed and clicked', () => {
    
    //Initialize the props needed to test the click Handler
    beforeEach( () => {
      
      // Here is were we mock / fake a function. Not to be confused with faking the funk.
      props.clickHandler = jest.fn();
      props.name= '9';
    })

    it('the argument of the function is the name', () => {
      const btn = button().find('button')

      btn.simulate('click')
      
      expect(props.clickHandler.mock.calls[0][0]).toBe(props.name)

    })
  })

  describe('when the props.name is passed', () => {
    beforeEach(() => {
      props.name = '*'
    })

    it("button value get's prop.name", () => {
      const btn = button().find('button')
      expect(btn.text()).toEqual(props.name);
    })
  })
})