import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
//import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  // it("should pass name 'James' as props", () => {
  //   const wrapper = mount(<Button name={'James'} />);
  //   expect(wrapper.props().name).to.equal('James');
  // });
  it('2nd test for rendering properly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });
});
