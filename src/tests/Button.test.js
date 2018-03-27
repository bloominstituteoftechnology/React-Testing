import React from 'react';
import ReactDOM from 'react-dom';
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
    const buttonFunc = jest.fn();
    const component = shallow(<Button name="testbutton" clickHandler={buttonFunc} />);
    component.find('button').simulate('click');
    expect(buttonFunc.mock.calls).toHaveLength(1);
    expect(buttonFunc.mock.calls[0]).toContain('testbutton');
  });

  it('renders the className `component-button` when not passed props', () => {
    const component = shallow(<Button />);
    expect(component.find('.component-button').exists()).toBeTruthy();
    expect(component.find('.wide').exists()).toBeFalsy();
    expect(component.find('.orange').exists()).toBeFalsy();
  });

  it('renders with className `component-button wide` when passed `wide` prop', () => {
    const component = shallow(<Button wide/>);
    expect(component.find('.component-button').exists()).toBeTruthy();
    expect(component.find('.wide').exists()).toBeTruthy();
    expect(component.find('.orange').exists()).toBeFalsy();
  });

  it('renders with className `component-button orange` when passed `orange` prop', () => {
    const component = shallow(<Button orange/>);
    expect(component.find('.component-button').exists()).toBeTruthy();
    expect(component.find('.wide').exists()).toBeFalsy();
    expect(component.find('.orange').exists()).toBeTruthy();
  });
});
