import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import { toBuffer } from 'ip';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('initial state is set',()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.state()).toEqual({
      total: '0',
      next: null,
     operation: null,
        });
      });
 
  it('should check app state', ()=>{
    expect(wrapper.state().total).toBe("0")
    expect(wrapper.state().next).toBe(null)
    expect(wrapper.state().operation).toBe(null)
  });

it('renders Display and Panel',()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find("Display").exists()).toBe(true);
  expect(wrapper.find('Panel').exists()).toBe(true);
});
it ('checks if total is 0',()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.state().total).toEqual("0");
})
  });
