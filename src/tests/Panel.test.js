import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders 19 <Button /> components', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(Button)).toHaveLength(19);
  });
  it('has a function called handleClick', () => {
    const wrapper = shallow(<Panel />);
    expect(typeof(wrapper.instance().handleClick)).toBe('function');
  });
  it('has a click event that propagates up from the child component',()=>{
    const handleClick = sinon.spy()
    const wrapper = shallow(<Panel key={0} clickHandler={handleClick} />)
    wrapper.find(Button).last().simulate('click');
    expect(handleClick.calledOnce).toBeTruthy;
  });
});