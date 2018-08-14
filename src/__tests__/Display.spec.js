import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  }); 

  const wrapper = shallow(<Display />)

  it('App display should display its value from props', () => {
    const props = { value: '42' }

    wrapper.setProps(props)
    const output = wrapper.find('.component-display')

    expect(output.text()).toEqual('42')
  })
});
