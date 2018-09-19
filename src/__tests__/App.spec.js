import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  //when handle click is envoked the button name appears in state
  
  // it('should update state when clicked', () => {
  //   const wrapper = shallow(<App />);
  //   const instance = wrapper.instance();

  //   const button = wrapper.find('')

  //   expect()
  // })
  
  it('state correctly displays initial values', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toEqual('0');
    expect(instance.state.next).toEqual(null);
    expect(instance.state.operation).toEqual(null);
  })
  //if the number clicked is stored in 'next' 

});
