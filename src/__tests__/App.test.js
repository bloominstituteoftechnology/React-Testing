import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  const app = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('should render exactly one Display component', () => {
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  });

  it('should render exactly one Panel component', () => {
    const panel = app.find('Panel');
    expect(panel.length).toEqual(1);
  });
});