import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    shallow(<App />);
  });
  it('initial total is 0', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.total).toBe('0');
  });
  it('initial next is null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.next).toBe(null);
  });
  it('initial operation is null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.operation).toBe(null);
  });
});
