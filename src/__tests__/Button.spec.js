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

  it('should render button text', () => {
    const btn = shallow(<Button name="8"/>);
    expect(btn.text()).toEqual("8");
  });

  it('should execute passed function', () => {
    let hasChanged = false;
    const passedFn = name => {if (name === "8") hasChanged = true};
    const wrapper = shallow(<Button name="8" clickHandler={passedFn}/>);
    const btn = wrapper.find('.component-button > button');

    btn.simulate('click');
    expect(hasChanged).toEqual(true);
  })
});
