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

  it('should render a div', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('div');

    expect(elements.length).toEqual(1);
  })

  it('should update state when handleClick is called', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.handleClick('1');
    expect(wrapper.state('next')).toEqual('1');
  })
});
