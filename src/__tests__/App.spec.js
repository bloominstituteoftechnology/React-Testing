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

  //state should have a total = '0' as default
  it('should have total equal to zero as default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  })

  //state should have null for operation and next as default
  it('should have next and operation as null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  })

  //ezra's code
  it('The key of state object, total, should equal 5', () => {
    const wrapper = shallow(<App/>)
    const instance = wrapper.instance()
    const buttons = wrapper.find('Panel').dive().find('Button').at(4).dive().find('button')
    buttons.simulate('click')
    expect(instance.state.next).toBe("7")
  })
  
  
});
