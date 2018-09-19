import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    const length = wrapper.find('Button').length;
    expect(length).toBe(19);
  });
  it('', () => {
    const wrapper = shallow(<Panel />);
    const buttonStuff= [];
    wrapper.find('Button').forEach(text => {
      buttonStuff.push(text.props().name);
    });
    const numBtns = buttonStuff
    .filter(button => Number.isInteger(Number(button)))
    .map(Number).sort();
    expect(numBtns).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
