import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render a button tag', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
  });

  it('should have className `component-button orange` when passed `orange` property', () => {
    const component = shallow(<Button orange />);
    expect(component.find('.orange')).toHaveLength(1);
  })

  it('should render props that it receives', () => {
    const component = shallow(<Button name='AC' />);
    expect(component.text()).toEqual('AC');
  });

  it('should have handleClick function', () => {
    const component = shallow(<Button />)
    expect(typeof(component.instance().handleClick)).toBe('function');
  })

  it('should be able to be clicked', () => {
    const handler = sinon.spy();
    const component = shallow(<Button name='test' clickHandler={handler} />);
    component.find('button').simulate('click');
    expect(handler.calledOnce).toEqual(true);
  })

  // it('should process the click', () => {
  //   const component = shallow(<Button name='AC' />);
  //   expect(component.props().children.props.onClick().clicked).toBe(false);
  //   component.find('button').simulate('click');
  //   expect(component.state().clicked).toBe(true);
  // })
  
  // it('calls componentDidMount', () => {
  //   sinon.spy(Button.prototype, 'componentDidMount');
  //   const component = mount(<Button name={'AC'} />);
  //   expect(Button.prototype.componentDidMount.calledOnce).toEqual(true);
  // });

  // it('should store comments in state', () => {
  //   const component = shallow(<Button name={name='AC'} />);
  //   expect(component.state('name')).toBeDefined();
  // });
});