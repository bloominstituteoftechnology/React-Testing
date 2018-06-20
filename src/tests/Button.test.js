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
  it('should be passed orange as prop, and given that as className', () => {
    const orange = shallow(<Button orange/>);
    expect(orange.find('.orange')).toHaveLength(1);
  })
  it('should return props.wide', () => {
    const wrap = shallow(<Button />);
    expect(wrap.find('.wide').exists()).toBeFalsy();
    expect(wrap.find('.component-button').exists()).toBeTruthy();
  })
});