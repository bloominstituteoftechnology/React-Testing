import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

configure({ adapter: new Adapter() });

describe('<Display />', () => {
  let wrap;

  beforeAll(() => {
    wrap = shallow(<Display />);
  });

  describe('basic renders', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
    });

    it('renders correctly', () => {
      expect(wrap).toMatchSnapshot();
    });
  });

  describe('classes', () => {
    it('should have the component-display class', () => {
      expect(wrap.find('.component-display')).toHaveLength(1);
    });
  });
});
