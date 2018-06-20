import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it("should have a div with class name component-panel", () => {
    const panel = shallow(<Panel />);
    expect(panel.find(".component-panel")).toHaveLength(1);
  });

  it("parent div should have 5 children divs", () => {
    const panel = shallow(<Panel />);
    expect(panel.find(".component-panel").children("div")).toHaveLength(5);
  });

  it("panel should have 19 different buttons", () => {
    const panel = shallow(<Panel />);
    expect(panel.find("Button")).toHaveLength(19);
  });

  it("should pass click handler and function properly", () => {
    window.alert = jest.fn();
    const panel = shallow(<Panel clickHandler={window.alert} />);
    panel.find(`[name="AC"] button`).simulate("click");
    expect(window.alert).toHaveBeenCalledTimes.toBe(1);
  });
});
