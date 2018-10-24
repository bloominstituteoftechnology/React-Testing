import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {


  describe('render()', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Button />, div);
    });

    it('should match snapshot', () => {
      const tree = renderer.create(<Button />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should render a div that dynamically takes a className', () => {
      const wrapper = shallow(<Button />);
      const elements = wrapper.find('div');
  
      expect(elements.length).toEqual(1);
    });

    it('should render the button', () => {
      const wrapper = shallow(<Button />);
      const elements = wrapper.find('button');
  
      expect(elements.length).toEqual(1);
    });     
  });
  
});
