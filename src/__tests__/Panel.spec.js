import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });
function wrapperFunc () {
  const wrapper = shallow(<Panel />);
  const instance = wrapper.instance(); 
  return instance; 
}
describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should check if handleClick is a function', () => {
    console.log(wrapperFunc())
    expect(typeof wrapperFunc().handleClick).toEqual('function');
  });

});
