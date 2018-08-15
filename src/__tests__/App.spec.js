import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';

import App from '../App';

//Enzyme.configure({ adapter: new Adapter() });

// describe('<App />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//   });
// });

//below added, above commented out from org

it('renders without crashing', () => {
  shallow(<App />);
});
it('should render a p tag with "Welcome to React', () => {
  const app = shallow(<App />)
  const parargraph = app.find('.App-intro');
  expect(parargraph.text()).toEqual('Welcome to React'); 
});
it ('should display a title passed as a prop', () => {
  const app = shallow(<App title='a title' />);
  const parargraph = app.find('.App-intro');
  //check for props
  expect(parargraph.text()).toEqual('a title');
});
it('should have a way to show if the switch is on or off', () => {
  const app = shallow(<App />);
  const display = app.find('.display');
  expect(display.text()).toEqual('off');
});
it('should be off by default', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  expect(instance.state.isOn).toEqual(false);
});
it('should have a button to toggle the on/off switch', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  const button = app.find('.toggle-btn');
  //it's off
  expect(instance.state.isOn).toEqual(false);
  //we toggle it by clicking the button
  button.simulate('click');
  //it's on
  expect(instance.state.isOn).toEqual(true);
  // we toggle it by clicking the button
  button.simulate('click');
  //it's off
  expect(instance.state.isOn).toEqual(false);
});
it('should display the state of the switch', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  const button = app.find('.toggle-btn');
  const display = app.find('.display');
  expect(display.text()).toEqual('off');
  button.simulate('click');
  //NO GOOD CODE BELOW
  // expect(display.text()).toEqual('on');
  // button.simulate('click');
  // expect(display.text()).toEqual('off');
  //IS render() OK TO USE ?
  expect(instance.state.isOn).toEqual(true);
  expect(app.find('.display').render().text()).toEqual('on');
});
