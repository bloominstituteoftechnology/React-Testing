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

  it ('App contains one component-app element', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('.component-app');

    expect(elements.length).toBe(1)
  })

  it ('state has correct initial "total" value', () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  })

  it ('state has correct initial "next" value', () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
  })

});
