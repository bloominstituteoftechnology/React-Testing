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

  it('should display the button', () => {
    const wrapper = shallow(<Button />);

    const display = wrapper.find('button');

    expect(display.length).toBe(1);
  })

  it('should display the component button', () => {
    const wrapper = shallow(<Button />);

    const display = wrapper.find('div.component-button');

    expect(display.length).toBe(1);
  })

  // describe('toggle button', () => {

  //   it('should ', () => {
  //     const wrapper = shallow(<Button />);
      
      
  //     const button = wrapper.find('button');
  //     button.simulate('click');
  //     expect(button.text()).toBe(true);

  //   });
  // });
});
