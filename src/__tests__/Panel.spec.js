import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });
function wrapperFunc (inst = true) {
  const wrapper = shallow(<Panel />);
  const instance = wrapper.instance(); 
  if(inst === false){
    return wrapper; 
  }
  return instance; 
}
describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should check if handleClick is a function', () => {
    expect(typeof wrapperFunc().handleClick).toEqual('function');
  });
  it('Should be 19 <Button /> on the panel', () => {
    const buttons = wrapperFunc(false).find('Button');
    expect(buttons.length).toEqual(19); 
  }); 

});
