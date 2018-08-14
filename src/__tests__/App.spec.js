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

  it('renders a display component', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    const display = app.find('Display');

    expect(display.length).toBe(1);
  })

  it('renders a panel component', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    const panel = app.find('Panel');

    expect(panel.length).toBe(1);
  })

  it('renders a display component with a default value of 0', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    expect(instance.state.total).toEqual('0');
  })
});
