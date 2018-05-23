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
  test("wrapping div should have classname component-button", () => {
    const wrapDiv = shallow(<Button />);
    expect(wrapDiv.hasClass('component-button')).toBeTruthy();
  });
  test('onclick funtion handleclick', () => {
    const spy = sinon.spy();
    const test = shallow(<Button clickHandler={spy}/>);
    test.find('button').simulate('click');
    expect(spy.calledOnce).toBeTruthy();
  });
});