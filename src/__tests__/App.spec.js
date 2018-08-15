import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import calculate from '../logic/calculate';
import App from "../App";

jest.mock('../logic/calculate.js');
Enzyme.configure({ adapter: new Adapter() });
describe("<App />", () => {
 
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it('should have a <Display /> and <Panel /> component', () => {
    const app = shallow(<App></App>);

    const display = app.find('Display');
    const panel = app.find('Panel');
    expect(display.length).toBe(1);
    expect(panel.length).toBe(1);
  })
  it('should have the appropriate default state for the <App />', () => {
    const app = shallow(<App></App>);
    const instance = app.instance();

    expect(instance.state.total).toEqual('0');
    expect(instance.state.next).toBeNull();
    expect(instance.state.operation).toBeNull();
  })
});
