import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render with a class of component-display', () => {
    wrapper = shallow(<Display />);
    expect(wrapper.find('.component-display')).toHaveLength(1);
  });

  describe('<Display />', () => {
    it('renders a value given by props', () => {
      const props = {
        value: '5'
      }
      const display = shallow(<Display  value={props.value} />)
      expect(display.text()).toEqual('5')
    });
  }); 

});
