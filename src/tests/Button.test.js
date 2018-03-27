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

  it('calls the clickHandler() function in props, and passes the buttons name when clicked', () => {
    const buttonFunc = sinon.spy();
    const component = shallow(<Button name="testbutton" clickHandler={buttonFunc} />);
    component.find('button').simulate('click');
    expect(buttonFunc.calledOnce).toBeTruthy();
    expect(buttonFunc.calledWith('testbutton')).toBeTruthy();
  });
});
