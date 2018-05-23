import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders without crashing, using wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
  it('should have an initial state where total: 0, next: null, operation: null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toEqual('0');
    expect(wrapper.state().next).toEqual(null);
    expect(wrapper.state().operation).toEqual(null);
  });
});
