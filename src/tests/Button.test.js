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
  it('should render with a className of component-button wide', () => {
    const componentButton = shallow(<Button wide/>);
    expect(componentButton.find('.component-button')).toHaveLength(1);
    expect(componentButton.find('.wide')).toHaveLength(1);
  });
  it('should render with a className of component-button orange', () => {
    const componentButton = shallow(<Button orange/>);
    expect(componentButton.find('.component-button')).toHaveLength(1);
    expect(componentButton.find('.orange')).toHaveLength(1);
  });
  it('should have click handler working', () => {
    const click = sinon.spy();
    const clickFunction = shallow(<Button name="Anything" clickHandler={click} />);
    clickFunction.find('button').simulate('click');
    expect(click.calledOnce).toEqual(true);
    expect(click.calledWith('Anything')).toEqual(true);
  });
});