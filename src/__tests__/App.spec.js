import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match snapshot', () => {
  	const tree = renderer.create(<App />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  //test all buttons for numbers
  it('should update state next on button click', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance()

		const btn0 = buttons.at(16) 	//button 0
		btn0.simulate('click')

		const btn1 = buttons.at(12) 	//button 1
		btn1.simulate('click')

  	const btn2 = buttons.at(13)		//button 2
  	btn2.simulate('click')

  	const btn3 = buttons.at(14)		//button 3
  	btn3.simulate('click')

	  const btn4 = buttons.at(8)		//button 4
	  btn4.simulate('click')

	  const dot = buttons.at(17)
	  dot.simulate('click')

  	const btn5 = buttons.at(9)		//button 5
  	btn5.simulate('click')

  	const btn6 = buttons.at(10)		//button 6
  	btn6.simulate('click')

  	const btn7 = buttons.at(4)		//button 7
  	btn7.simulate('click')

  	const btn8 = buttons.at(5)		//button 8
  	btn8.simulate('click')

  	const btn9 = buttons.at(6)		//button 9
  	btn9.simulate('click')

  	//if all buttons work then app state next = '01234.56789'
		expect(instance.state.next).toEqual('01234.56789')  	
  })

  it('should add two numbers', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance()
		const btn2 = buttons.at(13)		
		const equals = buttons.at(18)

  	btn2.simulate('click')
  	const add = buttons.at(15) 
  	add.simulate('click')
  	btn2.simulate('click')
  	equals.simulate('click')

  	//	2 + 2 = 4
  	expect(instance.state.total).toEqual('4')
  })

  it('should subtract two numbers', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance() 
		const btn5 = buttons.at(9)		//button 5
		const btn2 = buttons.at(13)
		const minus = buttons.at(11)
		const equals = buttons.at(18)

  	
  	btn5.simulate('click')
  	minus.simulate('click')
  	btn2.simulate('click')
  	equals.simulate('click')

		//	5 - 2 = 3
  	expect(instance.state.total).toEqual('3')
  })

  it('should multiply two numbers', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance() 
		const btn5 = buttons.at(9)
		const times = buttons.at(7)
		const equals = buttons.at(18)

		btn5.simulate('click')
		times.simulate('click')
		btn5.simulate('click')
		equals.simulate('click')

		// 5 x 5 = 25
		expect(instance.state.total).toEqual('25')
  })

  it('should divide two numbers', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance() 
		const btn5 = buttons.at(9)
		const divide = buttons.at(3)
		const equals = buttons.at(18)


		btn5.simulate('click')
		divide.simulate('click')
		btn5.simulate('click')
		equals.simulate('click')

		//	5 / 5 = 1
		expect(instance.state.total).toEqual('1')

	
  })

  it('AC button should clear out state', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance() 
		const btn5 = buttons.at(9)
		const AC = buttons.at(0)

		btn5.simulate('click')
		AC.simulate('click')

		// next = 5, click AC, next = null
		expect(instance.state.next).toEqual(null)
  })

  it('+/- should change negative positive value on state next', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance()
		const btn5 = buttons.at(9)
		const negPos = buttons.at(1)

		btn5.simulate('click')
		negPos.simulate('click')

		// next = 5, click +/-, next = -5
		expect(instance.state.next).toEqual('-5')
  })

  it('should add % to state operation', () => {
  	const wrapper = mount(<App />);
  	const buttons = wrapper.find('button')
		const instance = wrapper.instance()
		const percent = buttons.at(2)
		percent.simulate('click')

		// operation = '%'
		expect(instance.state.operation).toEqual('%')
  }) 
});