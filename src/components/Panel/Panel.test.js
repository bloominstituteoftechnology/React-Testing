import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel';

describe('Panel component', () => {
  const expected = {};

  beforeAll(() => {
    expected.clickHandler = jest.fn();
    expected.buttonProps = {
      name: expect.any(String),
      clickHandler: expect.any(Function)
    };
    expected.props = {
      clickHandler: expected.clickHandler
    };
  });

  it('renders without crashing', () => {
    shallow(<Panel {...expected.props} />);
  });

  it('renders a div container', () => {
    const panel = shallow(<Panel {...expected.props} />);
    const div = panel.find('.component-panel');
    expect(div.length).toBe(1);
  });

  it('renders enough Button components for necessary calculator actions', () => {
    const panel = shallow(<Panel {...expected.props} />);
    const Buttons = panel.find('Button');
    expect(Buttons.length).toBe(19);
  });

  it('calls clickHandler prop in handleClick method', () => {
    const panel = shallow(<Panel {...expected.props} />);
    const instance = panel.instance();
    instance.handleClick();
    expect(expected.clickHandler).toHaveBeenCalledTimes(1);
  });

  it('always renders Button component with a name and clickHandler prop', () => {
    const panel = shallow(<Panel {...expected.props} />);
    const Buttons = panel.find('Button');
    Buttons.forEach(Button => {
      expect(Button.props()).toMatchObject(expected.buttonProps);
    });
  });
});
