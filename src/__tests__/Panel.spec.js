import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../TestConfig';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('makes sure all of the the buttons are rendering', () => {
    const wrapper = shallow(<Panel />);
    const buttonCount = wrapper.find("Button").length;
    expect(buttonCount).toBe(19);
  })

  // it('makes sure 0 button is rendering with className wide', () => {
    
  // })
});
