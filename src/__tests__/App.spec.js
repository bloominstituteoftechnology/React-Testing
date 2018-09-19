import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should be zero by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toEqual('0');
  });

  it('should render 2 child components', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('.component-app');

    expect(elements.children().length).toEqual(2);
  });
});
