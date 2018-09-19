import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
function wrapperFunc () {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance(); 
  return instance; 
}
describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('total should have total "0" by default', () => {
    expect(wrapperFunc().state.total).toEqual("0");
  });
  it('next should be null', () => {
    expect(wrapperFunc().state.next).toEqual(null);
  });
  it('operation should be null', () => {

    expect(wrapperFunc().state.operation).toEqual(null);
  });
  it('handleClick should be a function', () => {
    expect(typeof wrapperFunc().handleClick).toEqual('function')
  });

});
