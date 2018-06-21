import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  const expected = {};

  beforeAll(() => {
    expected.displayProps = {
      value: expect.any(String)
    };
    expected.panelProps = {
      clickHandler: expect.any(Function)
    };
    expected.defaultState = {
      total: '0',
      next: null,
      operation: null
    };
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div container', () => {
    const app = shallow(<App />);
    const div = app.find('.component-app');
    expect(div.length).toBe(1);
  });

  it('renders a Display component', () => {
    const app = shallow(<App />);
    const Display = app.find('Display');
    expect(Display.length).toBe(1);
  });

  it('always passes value prop to Display component', () => {
    const app = shallow(<App />);
    const Display = app.find('Display');
    const props = Display.props();
    expect(props).toMatchObject(expected.displayProps);
  });

  it('renders a Panel component', () => {
    const app = shallow(<App />);
    const Panel = app.find('Panel');
    expect(Panel.length).toBe(1);
  });

  it('always passes clickHandler prop to Panel component', () => {
    const app = shallow(<App />);
    const Panel = app.find('Panel');
    const props = Panel.props();
    expect(props).toMatchObject(expected.panelProps);
  });

  it("always passes App's handleClick function as clickHandler prop to Panel component", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    const Panel = app.find('Panel');
    const props = Panel.props();
    expect(props.clickHandler).toEqual(instance.handleClick);
  });

  it('defaults state to total = "0", next = null, operation = null', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state).toMatchObject(expected.defaultState);
  });

  it('updates state with handleClick function', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    let prevState = instance.state;

    instance.handleClick('1');
    expect(instance.state).not.toMatchObject(prevState);

    prevState = instance.state;
    instance.handleClick('+');
    expect(instance.state).not.toMatchObject(prevState);

    prevState = instance.state;
    instance.handleClick('9');
    expect(instance.state).not.toMatchObject(prevState);
  });
});
