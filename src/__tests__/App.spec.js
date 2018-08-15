import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const app = shallow(<App />)
  it('renders Display component', () => {
    const display = app.find('Display')
    expect(display.length).toBe(1);
  });

  it('Check state to be initialized properly', () => {
    const instance = app.instance();
    const state = instance.state;
    const initialvalues = {
      total: '0',
      next: null,
      operation: null
    };
    expect(state).toEqual(initialvalues);
  })

  it('Should update the state with the click method', ()=> {
    const instance = app.instance();
    const statesChanged = {
      total: null,
      next: "1",
      operation: null
    };
    instance.handleClick('1');
    expect(instance.state).toEqual(statesChanged);
  })


});
  