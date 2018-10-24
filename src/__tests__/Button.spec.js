import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';


import Button from '../components/Button/Button';



describe('<Button />', () => {
  it('shallow renders without crashing',  () => {
    shallow(<Button />);
  });
  it('renders the div with orange',  () => {
    const wrapper = shallow(<Button orange/>);
    const buttons= wrapper.find('.orange');
    expect(buttons.length).toBe(1);
  });
  it('renders div with wide',  () => {
    const wrapper = shallow(<Button wide/>);
    const buttons= wrapper.find('.wide');
    expect(buttons.length).toBe(1);
  });
});
