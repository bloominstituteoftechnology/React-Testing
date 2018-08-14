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

  it('should display total 0 by default', () => {
    const app = shallow(<App />)
    const instance = app.instance();
    expect(instance.state.total).toEqual('0');
  })

  it('should display null by default', () => {
    const app = shallow(<App />)
    const instance = app.instance();
    expect(instance.state.next).toEqual(null);
  })

  it('operation should display null by default', () => {
    const app = shallow(<App />)
    const instance = app.instance();
    expect(instance.state.operation).toEqual(null);
  })

  // it('should have a handleClick method that updates the state', () => {
  //   const wrapper = shallow(<App />);
  //   const instance = wrapper.instance();
  //   instance.handleClick('1');
  //   expect(wrapper.state.next).toEqual('1');
  //   expect(wrapper.state.total).toEqual(null);
  //   expect(wrapper.state.operation).toEqual(null);
  // })

  


});
