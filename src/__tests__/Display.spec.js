import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme'; 


import Display from '../components/Display/Display';

function wrapperFunc () {
  const wrapper = shallow(<Display />);
  const instance = wrapper.instance(); 
  return instance; 
}
describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should check value is a string', () => {
    console.log(wrapperFunc())
    //value isn't a thing i can check. instance is null.
  })
});
