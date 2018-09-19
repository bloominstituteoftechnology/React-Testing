import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrap;

  beforeAll(() => {
    wrap = shallow(<Button orange />);
  });

  describe('basic renders', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Button />, div);
    });

    it('renders correctly', () => {
      expect(wrap).toMatchSnapshot();
    });

    it('renders a button', () => {
      expect(wrap.children()).toHaveLength(1);
      expect(wrap.find('button')).toHaveLength(1);
    });
  });

  describe('props', () => {
    it('should to use props correctly', () => {
      expect(wrap.find('.orange')).toHaveLength(1);
    });
  });
});
