import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  describe('Presentation:',() => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
  
    it('shallow renders without crashing', () => {
      shallow(<App />);
    });
  
    it('renders component-app div appropriately', () => {
      const app = shallow(<App />);
      const appContainer = app.find('.component-app');
      
      expect(appContainer.length).toEqual(1);
    });
  });

  describe('State:', () => {
    it('has a state with default values {total: "0", next: null, operation: null}',() => {
      const app = shallow(<App />);
      const instance = app.instance();
      
      expect(instance.state.total).toEqual('0');
      expect(instance.state.next).toBeNull();
      expect(instance.state.operation).toBeNull();
    });
    
    it('has its state changed appropriately when `handleClick()` is called',() => {
      const app = shallow(<App />);
      const instance = app.instance();
  
      instance.handleClick("8");
      
      expect(instance.state.total).toBeNull();
      expect(instance.state.operation).toBeNull();
      expect(instance.state.next).toEqual('8');
    });
  });

  describe('Events:', () => {
    xit('`handleClick()` fires `calculate` and `setState` functions', () => {
      const app = shallow(<App />);
      const instance = app.instance();
      // Mocks
      jest.mock('../logic/calculate');
      // instance.setState = jest.fn();

      instance.handleClick();
      expect(calculate).toHaveBeenCalledTimes(0);
    });
  });
});

