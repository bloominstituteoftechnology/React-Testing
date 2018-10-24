import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('Test default state values', () => {
    it('this.state.total should be 0 by default', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      expect(instance.state.total).toBe('0');
    });

    it('this.state.next should be null', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      expect(instance.state.next).toBe(null);
    });

    it('this.state.operation should be null', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      expect(instance.state.operation).toBe(null);
    });
  }); // Test default state values

  describe('Display components', () => {
    it('should have Display component', () => {
      const wrapper = shallow(<App />);
      const element = wrapper.find('Display');

      expect(element.length).toBe(1);
    });

    it('should have Panel component', () => {
      const wrapper = shallow(<App />);
      const element = wrapper.find('Panel');

      expect(element.length).toBe(1);
    });
  });
});
