import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {

  describe('Presentation:', () => {
    it('shallow renders without crashing', () => {
      shallow(<Display />);
    });
    
    it('should display "component-display" div', () => {
      const display = shallow(<Display />);
      const componentDisplay = display.find('.component-display');
      
      expect(componentDisplay.length).toEqual(1);
    });

    it('should present `value` from props appropriately', () => {
      const expected = 'Please don\'t charge me, PatrickBot!';
      const props = { value: expected };
  
      const display = shallow(<Display {...props} />);
      const namelessDiv = display.find('.component-display').childAt(0);
      
      expect(namelessDiv.text()).toEqual(expected);
    });
  });


});