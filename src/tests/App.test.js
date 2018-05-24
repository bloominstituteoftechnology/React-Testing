import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have total state set to 0', () => {
    // arrange
    const expected = '0';
    
    // act
    const wrapper = shallow(<App />)
    const inst = wrapper.instance();

    // assert
    expect(inst.state.total).toEqual(expected);
  })

  it('should have next state set to null', () => {
    // arrange
    const expected = null;
    
    // act
    const wrapper = shallow(<App />)
    const inst = wrapper.instance();

    // assert
    expect(inst.state.next).toEqual(expected);
  })

  it('should have operation state set to null', () => {
    // arrange
    const expected = null;
    
    // act
    const wrapper = shallow(<App />)
    const inst = wrapper.instance();

    // assert
    expect(inst.state.operation).toEqual(expected);
  })
});