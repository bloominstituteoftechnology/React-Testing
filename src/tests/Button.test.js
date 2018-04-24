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
  it('should contain a handleClick function', () => {
    const spy = sinon.spy();
    const component = shallow(<Button name='placeholder' clickHandler={spy}/>);   
    component.find('button').simulate('click');
    expect(spy.calledOnceWith('placeholder')).toEqual(true);
  });
  it('should render one element with class component-button', () => {
    const component = shallow(<Button />);
    expect(component.find('.component-button')).toHaveLength(1);
  });
  it('should render one element with class component-button and orange', () => {
    const component = shallow(<Button orange/>);
    expect(component.find('.component-button', 'orange')).toHaveLength(1);
  });
  it('should render one element with class component-button and wide', () => {
    const component = shallow(<Button wide/>);
    expect(component.find('.component-button', 'wide')).toHaveLength(1);
  });
});