import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const component = shallow(<Button />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should exist', () => {
    expect(component.exists());
  });
  it('should validate whether name is a string', () => {
    const component = mount(<Button name="test" />);
    expect('name' in component.type('string'));
  });
  it('should call onClick function', () => {
    const spy = jest.fn();
    const component = mount(<Button clickHandler={spy} />);
    component.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('should change classnames dynamically', () => {
    const component = mount(<Button />);
    expect(component.find('.component-button')).toHaveLength(2);
    console.log(component.props())
    

    

  });
});
