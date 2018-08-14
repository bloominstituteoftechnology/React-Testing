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
});

it('should have total, next, operation in state', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  expect(instance.state.total).toEqual('0');
  expect(instance.state.next).toBeDefined();
  expect(instance.state.total).toBeDefined();
});
