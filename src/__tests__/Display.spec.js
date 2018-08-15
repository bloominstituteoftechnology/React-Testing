import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  // Boilerplate testing code

  // Universal variables
  let props
  let mountedDisplay

  // Use this to get either a Display component which maintains the props from a 
  // previous test or start fresh with a new Display component
  // I opted to use shallow() in place of mount() here to make display() quicker
  const display = () => {
    if(!mountedDisplay){
      mountedDisplay = shallow(   // Could use mount() instead
        <Display {...props} />
      )
    }
    return mountedDisplay
  }

  // reset our mock passed in props before each test to a neutral starting point
  // Note that if we previously passed in props to display, mountedDisplay will retain
  // those props
  beforeEach(() => {
    props = {
      value: undefined
    }
    mountedDisplay = undefined
  })


  // Tests
  it('renders without crashing', () => {
    const app = display()
    app
  }); 

  it('renders two divs', () => {
    const divs = display().find('div')
    expect(divs.length).toEqual(2)
  })

  it('receives correct value through props', () => {
    props = {value: "Testing123"}
    const app = display()
    const output = app.find('.component-display')
    expect(output.text()).toMatch("Testing123")
  })

});




/* 
  First, lets examine the code for Display.js and determine what it's CONTRACT
  is telling us. This could include info such as 
  
  - What it renders
  - the props it receives
  - the state the component holds
  - what the component does when the user interacts with it

  This component....
      1.) takes in props for value which is a string
      2.) renders a div with the className component-display
      3.) renders another div
      4.) outputs the value prop

    1.) Since proptypes are well tested library code, and easily readable, 
        we will not test the type of the prop input, We will test that props are
        passed in, however
    2/3.) We will check both that the div is rendered, but not that it has the correct
        className, since this can be easily changed later and testing would too closely
        mimic the application code. We will also test whether the child div is rendered
    4.) We will test that the value output matches the input props
*/