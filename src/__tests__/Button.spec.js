import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should shallow render without crashing', () => {
    shallow(<Button />);
  });
  it('should render a wide div', () => {
    const wrapper = shallow(<Button wide />);
    const buttons = wrapper.find('.wide');

    expect(buttons.length).toBe(1);
  });
  it('should render a orange div', () => {
    const wrapper = shallow(<Button orange />);
    const buttons = wrapper.find('.orange');

    expect(buttons.length).toBe(1);
  });
});
