import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });
  // via Enzyme docs: API Reference > Shallow Rendering > children() && simulate()
  // Notice the object w/in `shallow()` ex for help w/ .orange test and .wide test
  it('returns a div with one child', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div').children()).toHaveLength(1);
  });

  it('renders an orange-colored button', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.component-button.orange')).toHaveLength(1);
  });
  it('renders a wider button', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.component-button.wide')).toHaveLength(1);
  });
  // simulate()
  it('calls click event once per click', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button clickHandler={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
