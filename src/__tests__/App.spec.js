import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders initial state', () => {
    const inst = shallow(<App />).instance();
    expect(inst.state.total).toBe('0');
    expect(inst.state.next).toBe(null);
    expect(inst.state.operation).toBe(null);
  });
});
