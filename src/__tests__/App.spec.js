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
  it(" count", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").children()).toHaveLength(2);
  });

  it('checks base state ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toBe('0');
    expect(wrapper.state().next).toBeNull();
    expect(wrapper.state().operation).toBeNull();
  });

  it('checks Display for prop ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Display").prop('value')).toBe("0");

  });

  it('checks Display for prop ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Panel").prop('clickHandler')).toBeInstanceOf(Function);
  });
});
