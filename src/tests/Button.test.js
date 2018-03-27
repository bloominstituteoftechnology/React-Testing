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
  it('should render a div with a `component-button` class', () => {
    const component = shallow(<Button />);
    expect(component.find('div.component-button')).toHaveLength(1);
  });
  it('should have a `handleClick` event handler', () => {
    const clickSpy = sinon.spy();
    const component = shallow(<Button name='2' clickHandler={clickSpy} />);
    component.find('button').simulate('click');
    expect(clickSpy.calledOnce).toEqual(true);
    expect(clickSpy.calledWith('2')).toEqual(true);
  });
  it('should have `orange` class if orange passed into props', () => {
    const component = shallow(<Button orange />);
    expect(component.find('.orange')).toHaveLength(1);
  })
  it('should have `wide` class if orange passed into props', () => {
    const component = shallow(<Button wide />);
    expect(component.find('.wide')).toHaveLength(1);
  })
});