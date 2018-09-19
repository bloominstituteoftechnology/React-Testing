import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrap;

  beforeAll(() => {
    wrap = shallow(<App />);
  });

  describe('basic renders', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('renders correctly', () => {
      expect(wrap).toMatchSnapshot();
    });

    it('renders two components', () => {
      expect(wrap.children()).toHaveLength(2);
    });
  });

  describe('state', () => {
    it('should set its initial state correctly', () => {
      const { total, next, operation } = wrap.state();
      expect(total).toBe('0');
      expect(next).toBe(null);
      expect(operation).toBe(null);
    });
  });
});
