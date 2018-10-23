import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should match snapshot', () => {
  	const tree = renderer.create(<Panel />).toJSON();
  	expect(tree).toMatchSnapshot();
  })

  // it('should update state when clicked', () => {
  // 	const wrapper = shallow(<Panel />);
  // 	const buttons = wrapper.find('Button')
  // 	const btn7 = buttons.at(4);
  // 	const instance = wrapper.instance()
  // 	btn7.simulate('click')
  // 	expect(instance.state).toEqual('alsdkj')


  // 	//expect(bnt7.props().name).toEqual('steven')

  // })


});


  // const wrapper = shallow(<App />);
  // const instance = wrapper.instance();
  // const button = wrapper.find('.toggle-btn');

  // // click the button
  // button.simulate('click');
  // // make sure the state changed
  // expect(instance.state.isOn).toEqual(true);

  // // click the button
  // button.simulate('click');
  // // make sure the state changed back
  // expect(instance.state.isOn).toEqual(false);


  //  it('should update state when button clicked', () => {
  // 	const wrapper = shallow(<Panel />)
  // 	const buttons = wrapper.find('Button')
  // 	//console.log(buttons)
  // 	const btn7 = buttons.at(4);
  // 	const instance = wrapper.instance()
  // 	btn7.simulate('click')
  	


  // 	expect(buttons.at(4).props().name).toEqual(20)
  // })