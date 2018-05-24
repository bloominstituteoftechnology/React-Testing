import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

it('should be the same as snapshot', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});

it ('display and panel should render', () => {
  const app = shallow(<App />);
  const display = app.find('Display');
  const panel = app.find('Panel');
  expect(display.length).toBe(1);
  expect(panel.length).toBe(1);
});