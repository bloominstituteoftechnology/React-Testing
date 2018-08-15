import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render with a class of component-button', () => {
    wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
  });

  it("calls the click handler once when clicked", () => {
    const func = sinon.spy();
    const wrapper = shallow(<Button clickHandler={func} />);
    wrapper.find('button').simulate('click');
    expect(func.calledOnce).toEqual(true);
  });

});
