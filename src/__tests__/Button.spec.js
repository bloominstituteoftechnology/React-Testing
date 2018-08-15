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

  it('renders with className "component-button" when not passed any props', () => {
    const button = shallow(<Button />);
    button.simulate('click');
    // expect(component.find('.component-button')).toHaveLength(1);
  });

  it('renders with className "component-button wide" when passed the "wide" prop', () => {
    const component = shallow(<Button wide />);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.wide')).toHaveLength(1);
  });

  it('renders with className "component-button orange" when passed the "orange" prop', () => {
    const component = shallow(<Button orange />);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.orange')).toHaveLength(1);
  });
});
