import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('has a function for handleClick in class declaration', () => {
    const wrapper = shallow(<Panel />);
    const instance = wrapper.instance();

    expect(typeof instance.handleClick).toBe('function');
  });
});
