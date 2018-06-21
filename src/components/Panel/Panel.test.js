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

  it('always passes name and clickHandler prop to Button component', () => {
    const panel = shallow(<Panel {...expected.props} />);
    const Buttons = panel.find('Button');
    Buttons.forEach(Button => {
      const props = Button.props();
      expect(props).toMatchObject(expected.buttonProps);
    });
  });

  it("always passes Panel's handleClick function as clickHandler prop to Button component", () => {
    const panel = shallow(<Panel {...expected.props} />);
    const instance = panel.instance();
    const Buttons = panel.find('Button');
    Buttons.forEach(Button => {
      const props = Button.props();
      expect(props.clickHandler).toEqual(instance.handleClick);
    });
  });
});
