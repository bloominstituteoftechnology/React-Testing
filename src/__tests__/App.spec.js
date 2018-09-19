import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrap = shallow(<App />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('displays initial total as 0', ()=>{
    expect(wrap.state('total')).toBe('0');
  });
  it('displays initial next as null', () => {
    expect(wrap.state('next')).toBe(null);
  });
  it('displays initial operation as null', () => {
    expect(wrap.state('operation')).toBe(null);
  });
  it('component-app length to be 1', () => {
    expect(wrap.find('div.component-app').length).toBe(1);
  });
  it('displays initial total as 0', () => {
    expect(wrap.find('div.component-app').length).toBe(1);
  });
});
