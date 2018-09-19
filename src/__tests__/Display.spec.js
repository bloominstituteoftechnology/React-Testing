import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });
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
