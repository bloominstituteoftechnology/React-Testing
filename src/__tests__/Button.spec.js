import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
  shallow(<Button />);
  });

  it('renders dive with orange', () => {
    const wrapper = shallow(<Button orange/>);
    const buttons= wrapper.find('.orange');
    expect(buttons.length).toBe(1);
  })

  it('renders div with wide',  () => {
    const wrapper = shallow(<Button wide/>);
    const buttons= wrapper.find('.wide');
    expect(buttons.length).toBe(1);
  });
  
});
