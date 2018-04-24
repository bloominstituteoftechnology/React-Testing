import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('calls a callback on click with the arguement of name prop', () => {
    const onButtonClick = sinon.spy();
    const component = shallow(
      <Button name="dog" clickHandler={onButtonClick} />
    );
    component.find('button').simulate('click');
    expect(onButtonClick.firstCall.args[0]).toEqual('dog');
  });
  it('wide', () => {
    const component = shallow(<Button name="dog" wide />);
    expect(component.find('.wide')).toHaveLength(1);
  });
  it('orange', () => {
    const component = shallow(<Button name="dog" orange />);
    expect(component.find('.orange')).toHaveLength(1);
  });
});
