import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  test('Default total should be 0', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.total).toEqual("0");
  });
  test('Default operation and next states should be null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.next).toEqual(null);
    expect(instance.state.operation).toEqual(null);
  });
});
