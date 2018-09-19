import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });//end crash test

  it('should render a display and panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Display)).toHaveLength(1);
    expect(wrapper.find(Panel)).toHaveLength(1);
  });//end subcomponent render test

  describe('App state tests', () => {
    it('should have state', () => {
      const wrapper = shallow(<App />);
      const state = wrapper.state();
      expect(Object.keys(state)).toEqual(['total', 'next', 'operation']);
    });//end state init test

    it('should update state function is called', () => {
      const wrapper = mount(<App />);
      const initState = wrapper.state();
      const button = wrapper.find('.component-button > button').at(9);

      button.simulate('click');

      const afterState = wrapper.state();

      expect(afterState).not.toEqual(initState);
    });//end state update
  });//end state tests
});//end app tests
