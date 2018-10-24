import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../TestConfig';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

    // test that a button is rendering
    it('should render a button', () => {
      const wrapper = shallow(<Button />);
      const elements = wrapper.find('button');

      expect(elements.length).toBe(1);
    })

   
    // test for className orange
    it('should render an orange button', () => {
      const wrapper = shallow(<Button orange />);
      const elements = wrapper.find('.orange');
      expect(elements.length).toBe(1);
    })

    // test for className wide
    it('renders a wide button', () => {
      const wrapper = shallow(<Button wide />);
      const elements = wrapper.find('.wide');
      expect(elements.length).toBe(1);
    })

    // test the click event handler is passing the button name

});
