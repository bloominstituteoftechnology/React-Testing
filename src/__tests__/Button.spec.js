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
- a div is always rendered
- the rendered div contains everything else that gets rendered
- the button is always rendered
- 

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

  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const div = button().find('div');
      /*
      Using .find in enzyme arranges the nodes in order of such that 
      the outermost node is first:
      */
      const wrappingDiv = div.first();

      /*

      */
      console.log(wrappingDiv.children())
    })
  })

})