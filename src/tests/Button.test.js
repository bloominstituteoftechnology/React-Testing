import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  describe('Presentation:', () => {
    it('shallow renders without crashing', () => {
      shallow(<Button />);
    });
    it('renders a button within a div', () => {
      const button = shallow(<Button />);
      const componentButton = button.find('.component-button');
      const buttonChild = componentButton.find('button');

      expect(componentButton.length).toEqual(1);
      expect(buttonChild.length).toEqual(1);
    });
  });

  describe('Events:', () => {
    xit('has a `clickHandler` prop when passed', () => {
      const expected = jest.fn();
      const props = { clickHandler: expected };
      const button = shallow(<Button {...props} />);

      expect(button.props().clickHandler).toEqual(expected);       
    });

    it('fires `clickHandler` when button is clicked', () => {
      const expected = jest.fn();
      const props = { clickHandler: expected };
      const button = shallow(<Button {...props} />);
      const hellButton = button.find('.component-button').childAt(0);
      
      hellButton.simulate('click');
      expect(expected).toHaveBeenCalledTimes(1);
    });
  });
});