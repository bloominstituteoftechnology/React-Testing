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

  it("should display name passed as a prop", () => {
    const button = shallow(<Button name="name" />);
    const name = button.find(".component-button");
    expect(name.text()).toEqual("name");
  });

  it("should display orange or wide property when passed as a prop", () => {
    const button = shallow(<Button orange wide />);
    expect(button.find('.component-button')).toHaveLength(1);
    expect(button.find('.orange').length).toBe(1);
    expect(button.find('.wide').length).toBe(1);
  })
});
