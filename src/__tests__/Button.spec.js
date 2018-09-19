import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Button from '../components/Button/Button';
import { finished } from 'stream';

//jest.mock('../components/Button/Button');

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders 1 <Button /> component', () => {
    const component = shallow(<Button name = "button"/>);
    expect(component).toHaveLength(1);
  });

  describe('it renders props correctly', () => {
    const component = shallow(<Button name = "button"/>);
    expect(component.instance().props.name).toBe("button");
  });

  it('should have class: `.component-button`', () => {
    const component = shallow(<Button />);
    expect(component.find('.component-button')).toHaveLength(1);
  });

  it('should have class: `component-button orange` when orange is specified',() => {
    const component = shallow(<Button orange/>);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.orange')).toHaveLength(1);
  })

  it('should have class:  `component-button wide` when wide is specified', () => {
    const component = shallow(<Button wide/>);
    console.log(component.props());
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.wide')).toHaveLength(1);
  })

  it('should invoke the handleClick() function when clicked', () => {
    const buttonFunction = sinon.spy(); 
    //A spy call is an object representation of an invididual call to a spied function
    //https://sinonjs.org/releases/v5.0.5/spy-call/
    const component = shallow(<Button name = "button-function" clickHandler = {buttonFunction} />);
    component.find('button').simulate('click');
    expect(buttonFunction.calledOnce).toEqual(true);
    //calledOnce - true if spy is called once
    expect(buttonFunction.calledWith('button-function')).toEqual(true);
    //Returns true if spy was called at least once with the provided arguments.
    ////https://sinonjs.org/releases/v2.0.0/spies/
  })
});
