import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {


  describe('render()', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('should render an over-arching div called component-app', () => {
      const wrapper = shallow(<App />);
      const elements = wrapper.find('div.component-app');
  
      expect(elements.length).toEqual(1);
    });
  
    it('should always have a Display component rendered', () => {
      const wrapper = shallow(<App />);
      const elements = wrapper.find('Display');
  
      expect(elements.length).toEqual(1);
    });
  
    it('should always have a Panel component rendered', () => {
      const wrapper = shallow(<App />);
      const elements = wrapper.find('Panel');
  
      expect(elements.length).toEqual(1);
    });
  });
  
  
  describe('state {}', () => {
    it('should start with a state\'s total = 0 everytime the app is refreshed or is started', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
  
      expect(instance.state.total).toEqual('0');
    });
  
    it('next should have a value of null on state', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
  
      expect(instance.state.next).toEqual(null);
    });   
    
    it('operation should have a value of null on state', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
  
      expect(instance.state.next).toEqual(null);
    });   
  });


  
});
