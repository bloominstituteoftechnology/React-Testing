import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('shallow renders without crashing',  () => {
    shallow(<Button />);
  });
  it('renders div with orange',  () => {
    const wrapper = shallow(<Button orange/>);
    const buttons= wrapper.find('.orange');
    expect(buttons.length).toBe(1);
  });
  it('renders div with wide',  () => {
    const wrapper = shallow(<Button wide/>);
    const buttons= wrapper.find('.wide');
    expect(buttons.length).toBe(1);
  });
  it('renders div with orange',  () => {
    const wrapper = shallow(<Button name='abcd' />);
    const buttons= wrapper.find('button');
    expect(buttons.text()).toBe('abcd');
  });
});
