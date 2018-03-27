import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should render a button', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
  });
  it('should call the handle click function when clicked', () => {
    const clickSpy = sinon.spy();
    const component = shallow(<Button clickHandler={clickSpy}/>);

    component.find('button').simulate('click')
    expect(clickSpy.calledOnce).toEqual(true);
  });
});