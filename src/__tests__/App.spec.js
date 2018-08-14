import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should have initial values for state', () => {
    const app = shallow(<App />);
    const instance  = app.instance();
    expect(instance.state.total).toEqual('0');
    expect(instance.state.next).toEqual(null);
    expect(instance.state.operation).toEqual(null);
  });

  it('should handle button entry', () => {
    const app = shallow(<App />);
    const instance  = app.instance();
    instance.handleClick('5')
    expect(instance.state.next).toEqual('5');
  });
});
