import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const expected = {};

  beforeAll(() => {
    expected.name = '9';
    expected.clickHandler = jest.fn();
    expected.props = {
      name: expected.name,
      clickHandler: expected.clickHandler
    };
  });

  it('renders without crashing', () => {
    shallow(<Button {...expected.props} />);
  });

  it('renders a div container', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const div = btnComp.find('.component-button');
    expect(div.length).toBe(1);
  });

  it('renders a button', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const button = btnComp.find('button');
    expect(button.length).toBe(1);
  });

  it('renders provided name prop inside button', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const button = btnComp.find('button');
    expect(button.text()).toEqual(expected.name);
  });

  it('calls provided clickHandler when button is clicked', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const button = btnComp.find('button');
    button.simulate('click');
    expect(expected.clickHandler).toHaveBeenCalledTimes(1);
  });

  it('passes name prop to clickHandler', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const button = btnComp.find('button');
    button.simulate('click');
    expect(expected.clickHandler.mock.calls).toContainEqual([expected.name]);
  });

  it('renders div container with "orange" as a class when orange prop is provided', () => {
    const props = Object.assign({}, expected.props, { orange: true });
    const btnComp = shallow(<Button {...props} />);
    const actual = btnComp.find('.component-button').hasClass('orange');
    expect(actual).toBeTruthy();
  });

  it('renders div container without "orange" as a class when orange prop is excluded', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const actual = btnComp.find('.component-button').hasClass('orange');
    expect(actual).toBeFalsy();
  });

  it('renders div container with "wide" as a class when wide prop is provided', () => {
    const props = Object.assign({}, expected.props, { wide: true });
    const btnComp = shallow(<Button {...props} />);
    const actual = btnComp.find('.component-button').hasClass('wide');
    expect(actual).toBeTruthy();
  });

  it('renders div container without "wide" as a class when wide prop is excluded', () => {
    const btnComp = shallow(<Button {...expected.props} />);
    const actual = btnComp.find('.component-button').hasClass('wide');
    expect(actual).toBeFalsy();
  });
});
