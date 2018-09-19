import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('initial state is set', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  it('renders Display and Panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display').exists()).toBe(true);
    expect(wrapper.find('Panel').exists()).toBe(true);
  });

  it('checks if total is 0 ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toBe('0');
  });
});
