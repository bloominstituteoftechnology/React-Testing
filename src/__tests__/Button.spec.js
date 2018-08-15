import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders with className `component-button` when not passed any props', () => {
    const component = shallow(<Button />);
    expect(component.find('.component-button')).toHaveLength(1);
  });

  it('render with className `component-button wide` when pass the `wide` prop', () => {
    const component = shallow(<Button wide/>);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.wide')).toHaveLength(1);
  });

  it('renders with className `component-button orange` when passed the `orange` prop', () => {
    const component = shallow(<Button orange/>);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.orange')).toHaveLength(1);
  })
});
