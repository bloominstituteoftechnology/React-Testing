import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render both display and panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display')).toHaveLength(1);
    expect(wrapper.find('Panel')).toHaveLength(1);
  });

  describe('App state testing', () => {
    it('has a state', () => {
      const wrapper = shallow(<App />);
      const state = wrapper.state();
      expect(Object.keys(state)).toEqual(['total', 'next', 'operation']);
    });

    it('should update the state after clicking the button', () => {
      const wrapper = mount(<App />);
      const preState = wrapper.state();
      const button = wrapper.find('.component-button > button').at(9);

      button.simulate('click');

      const postState = wrapper.state();

      expect(postState).not.toEqual(preState);
    });
  });
});
