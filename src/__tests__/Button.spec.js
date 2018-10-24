import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('should return a value', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.setProps({ name: '4' });

    expect(wrapper.props().clickHandler).toBeDefined();
  });
});
