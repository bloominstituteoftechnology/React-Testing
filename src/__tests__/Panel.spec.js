import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should renders 19 buttons', () => {
    const wrapper = shallow(<Panel />);

    const elements = wrapper.find('Button');

    expect(elements.length).toEqual(19);
  });

  it('has buttons for all numbers', () => {
    const wrapper = shallow(<Panel />);
    const buttons = [];
    wrapper.find('Button').forEach(button => {
      buttons.push(button.props().name);
    });
    expect(
      buttons
        .filter(txt => /^\d$/.test(txt))
        .sort()
        .map(Number),
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
