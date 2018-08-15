import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  const props = {
    name: 'Submit',
    orange: true,
    wide: false,
    clickHandler: jest.fn(),
  };
  const button = shallow(<Button {...props} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it(`displays the name 'Submit' when passed through props`, () => {
    expect(button.find('button').text()).toEqual('Submit');
  });

  it('contains the class .orange when orange is set to true', () => {
    expect(button.hasClass('orange')).toBeTruthy();
  });

  it('does not contain the class .wide when wide is set to false', () => {
    expect(button.hasClass('wide')).toBeFalsy();
  });

  it('executes its passed click handler when clicked', () => {
    button.find('button').simulate('click');
    expect(props.clickHandler).toHaveBeenCalled();
  });

});
