import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  describe('Button component', () => {

    it('renders without crashing', () => {
      shallow(<Button />)
    });
    it.skip('renders a button', () => {
      const wrap = shallow(<Button />);
      const button = wrap.find('.component-button');
      expect(button).toEqual('<button></button>')
    })
  })
});