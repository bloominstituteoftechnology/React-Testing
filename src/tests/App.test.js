import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe(<App />, () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should return a display component', () => {
    const app = shallow(<App />);
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  })
});