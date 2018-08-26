import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';



describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it("should display a name passed as a prop", () => {
    const button = shallow(<Button name="a name" />);
    const name = button.find(".component-button");
    expect(name.text()).toEqual("a name");
  });
  
  it("should display no orange or wide property when not passed as a prop", () => {
    const button = shallow(<Button  />);
    expect(button.find('.component-button')).toHaveLength(1);
    expect(button.find('.orange').length).toBe(0);
    expect(button.find('.wide').length).toBe(0);
  });

  it("should display orange property when passed as a prop", () => {
    const button = shallow(<Button orange/>);
    expect(button.find('.orange')).toHaveLength(1);
  });
});
