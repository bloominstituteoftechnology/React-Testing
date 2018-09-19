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

  it('renders 19 buttons ', () => {
    const wrapper = shallow(<Panel  />);
    const len = wrapper.find('Button').length;
    expect(len).toBe(19);
  });

  it('has buttons for all numbers', () => {
    const wrapper = shallow(<Panel  />);
    const buttonTexts = [];
    wrapper.find('Button').forEach(button => {
      buttonTexts.push(button.props().name);
    });
    
    expect(
      buttonTexts
        .filter(txt => /^\d$/.test(txt))
        .sort()
        .map(Number),
      ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); 
  });
});
