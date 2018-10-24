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

  it('should have a component panel element', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div.component-panel');
    expect(elements.length).toBe(1);
  });

  it('should have a component panel element', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div.row');
    expect(elements.length).toBe(5);
  });
});