import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  let wrap;

  beforeAll(() => {
    wrap = shallow(<Panel />);
  });

  describe('basic renders', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Panel />, div);
    });

    it('renders correctly', () => {
      expect(wrap).toMatchSnapshot();
    });
  });

  describe('classes', () => {
    it('should have the component-panel class', () => {
      expect(wrap.find('.component-panel')).toHaveLength(1);
    });
  });
});
