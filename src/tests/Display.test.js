import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  
  describe('Renders properly', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
    })
  });

  describe('Displays', () => {
    it('displays the value passed down as props', () => {
      let props = { value: '1' }
      const wrapper = shallow(<Display {...props} />)
      const found = wrapper.find('div>div').text()
      expect(found).toBe(props.value)
    })
  });

});

