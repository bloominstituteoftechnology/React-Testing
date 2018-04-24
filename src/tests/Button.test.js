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
  it('should have 1 children', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div').children()).toHaveLength(1);
  });
  it('should have classname component-button', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.getElement().props.className).toEqual('component-button');
  });
  it('should have button element', () => {
    const wrapper = shallow(<Button />);
    // console.log(wrapper.find('button').exists());
    expect(wrapper.find('button').exists()).toEqual(true);
  });
  // it('should have a button with click function', () => {
  //   const wrapper = shallow(<Button />);
  //   console.log(wrapper.find('button').prop('onClick'));
  //   expect(wrapper.find('button').prop('onClick'));
  // });
});
