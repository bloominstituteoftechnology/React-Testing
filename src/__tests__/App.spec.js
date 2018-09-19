import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  });
  
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should check app state', () => {
    expect(wrapper.state().total).toBe('0')
    expect(wrapper.state().next).toBe(null)
    expect(wrapper.state().operation).toBe(null)
  })
});
