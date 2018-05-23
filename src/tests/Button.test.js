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
});

//My Test Code
it("Pass button `C` for clear on click", () => {
  const func = sinon.spy();
  const component = shallow(<Button name="C" clickHandler={func} />);
  component.find('button').simulate('click');

  expect(func.calledOnce).toEqual(true);
  expect(func.calledWith('C')).toEqual(true);
});
//----------------------------------------------------------------------------------------------

it('Pass button component when orange prop is passed', () => {
  const component = shallow(<Button orange/>);

  expect(component.find('.orange').exists()).toBe(true);
  expect(component.find('.component-button').exists()).toBe(true);
  expect(component.find('.wide').exists()).toBe(false);
});
//----------------------------------------------------------------------------------------------

it('Pass component-button wide when passing wide prop', () => {
  const component = shallow(<Button wide/>);

  expect(component.find('.component-button').exists()).toBe(true);
  expect(component.find('.wide').exists()).toBe(true);
});