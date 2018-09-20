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
  
  it('correctly displays initial values in state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toEqual('0');
    expect(instance.state.next).toEqual(null);
    expect(instance.state.operation).toEqual(null);
  })

  it('should pass the total to Display if next is null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    wrapper.setState({next: null, total: '7'});
    //we set wrapper (App) 's state to total: 7 

    const elements = wrapper.find({ value: instance.state.total })//finds the elements contained in wrapper (App) that contain value:7 in this example it is either display or Panel. 

    expect(elements.length).toBe(1); // if display is set ot 2 then this should be 0.  
    
  })

});
