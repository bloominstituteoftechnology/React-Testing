import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../App';

//set up instance to run tests on
const wrapper = mount(<App />);
const buttons = wrapper.find('button')
const instance = wrapper.instance() 

//all my numbers plus . 
const btn0 = buttons.at(16) 	//button 0
const btn1 = buttons.at(12) 	//button 1
const btn2 = buttons.at(13)		//button 2
const btn3 = buttons.at(14)		//button 3
const btn4 = buttons.at(8)		//button 4
const dot = buttons.at(17)
const btn5 = buttons.at(9)		//button 5
const btn6 = buttons.at(10)		//button 6
const btn7 = buttons.at(4)		//button 7
const btn8 = buttons.at(5)		//button 8
const btn9 = buttons.at(6)		//button 9

//all my operations
const equals = buttons.at(18)	// =
const minus = buttons.at(11)	// -
const add = buttons.at(15) 		// +
const divide = buttons.at(3)	// /
const AC = buttons.at(0)			// AC
const negPos = buttons.at(1)	// +/-
const percent = buttons.at(2)	// %
const times = buttons.at(7)		// x


describe('<App />', () => {

	//make sure it works
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  //see if its been changed
  it('should match snapshot', () => {
  	const tree = renderer.create(<App />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  //make sure next state works with numbers and . 
  it('should update state next on button click', () => {
  	//click everything
		btn0.simulate('click')
		btn1.simulate('click')
  	btn2.simulate('click')
  	btn3.simulate('click')
	  btn4.simulate('click')
	  dot.simulate('click')
  	btn5.simulate('click')
  	btn6.simulate('click')
  	btn7.simulate('click')
  	btn8.simulate('click')
  	btn9.simulate('click')

  	//if all buttons work then app state next = '01234.56789'
		expect(instance.state.next).toEqual('01234.56789')  	
  })

  //add two numbers
  it('should add two numbers', () => {
  	//clear out 01234.56789
  	AC.simulate('click')

  	btn2.simulate('click')
  	add.simulate('click')
  	btn2.simulate('click')
  	equals.simulate('click')

  	//	2 + 2 = 4
  	expect(instance.state.total).toEqual('4')
  })

  //subtract two numbers
  it('should subtract two numbers', () => {

  	btn5.simulate('click')
  	minus.simulate('click')
  	btn2.simulate('click')
  	equals.simulate('click')

		//	5 - 2 = 3
  	expect(instance.state.total).toEqual('3')
  })

  //multiply two numbers
  it('should multiply two numbers', () => {

		btn5.simulate('click')
		times.simulate('click')
		btn5.simulate('click')
		equals.simulate('click')

		// 5 x 5 = 25
		expect(instance.state.total).toEqual('25')
  })

  //divide two numbers
  it('should divide two numbers', () => {
  	
		btn5.simulate('click')
		divide.simulate('click')
		btn5.simulate('click')
		equals.simulate('click')

		//	5 / 5 = 1
		expect(instance.state.total).toEqual('1')
  })

  //check AC to clear out state
  it('AC button should clear out state', () => {
		btn5.simulate('click')
		AC.simulate('click')

		// next = 5, click AC, next = null
		expect(instance.state.next).toEqual(null)
  })

  //see if positive or negative value effects state
  it('+/- should change negative positive value on state next', () => {

		btn5.simulate('click')
		negPos.simulate('click')

		// next = 5, click +/-, next = -5
		expect(instance.state.next).toEqual('-5')
  })

  //percentage shows up on state
  it('should add % to state operation', () => {

		percent.simulate('click')

		// operation = '%'
		expect(instance.state.operation).toEqual('%')
  }) 
});