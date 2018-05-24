import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {

  describe('Renders properly', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Panel />, div);
    });
  })

  describe('ClickHandler', () => {
    it('checks if it is a function', () => {
      // arrange
    });
  })

});