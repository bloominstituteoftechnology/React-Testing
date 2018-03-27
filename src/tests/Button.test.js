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
  it('defaults to component-button as className', () => {
    const buttonComponent = shallow(<Button />);
    expect(buttonComponent.find('.component-button')).toHaveLength(1);
  });
  it('has className of component-button orange', () => {
    const buttonComponent = shallow(<Button orange/>);
    expect(buttonComponent.find('.component-button')).toHaveLength(1);
    expect(buttonComponent.find('.orange')).toHaveLength(1);
  });
  it('has className of component-button wide', () => {
    const buttonComponent = shallow(<Button wide/>);
    expect(buttonComponent.find('.component-button')).toHaveLength(1);
    expect(buttonComponent.find('.wide')).toHaveLength(1);
  });
  it('invoked clickHandler upon click', () => {
    const spy = sinon.spy();
    const buttonComponent = shallow(<Button clickHandler={spy}/>);
    buttonComponent.find('button').simulate('click');
    expect(spy.calledOnce).toEqual(true);
  });
});
