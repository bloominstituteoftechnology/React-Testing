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
});

it('should have a toggle button', () => {
  const wrapper = shallow(<App />);

  const elements = wrapper.find('button.toggle-btn');

  expect(elements.length).toBe(1);
});

// describe('toggle button', () => {
//   it('should toggle state on click', () => {
//     const wrapper = shallow(<App />);
//     const instance = wrapper.instance();

//    
//     const button = wrapper.find('button.toggle-btn');

//     button.simulate('click');
//     expect(instance.state.isOn).toBe(true);

//     button.simulate('click');
//     expect(instance.state.isOn).toBe(false);
//   });
// });
// });
