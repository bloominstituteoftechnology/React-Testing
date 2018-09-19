import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('button updates props correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('.btnclick');
    button.simulate('click');
    expect(instance.state.orange).toEqual(orange);

  });

});
