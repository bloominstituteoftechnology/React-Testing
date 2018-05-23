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

  it('.orange class when props.orange is true', () => {
    const wrapper = shallow(<Button orange />)
    expect(wrapper.find('.orange')).toBeLength(1);
  })

  it('.wide class when props.wide is true', () => {
    const wrapper = shallow(<Button wide />)
    expect(wrapper.find('.wide')).toBeLength(1);
  })

  
});