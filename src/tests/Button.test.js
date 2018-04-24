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
  it('should render one element with a class of component-button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
  });
  it('should call handleClick() when clicked', () => {
    const spy = sinon.spy;
    const wrapper = shallow(<Button />);
    wrapper.find('button').simulate('onClick');
    expect(spy.calledWith('onClick')).toEqual(false);
  });
});
