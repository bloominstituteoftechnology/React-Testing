import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import Panel from '../components/Panel/Panel';

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
