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
  describe('calculate function', () => {
  it('runs the calculate function once when handleClick has been invoked', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    instance.handleClick('5')
    expect(calculate).toHaveBeenCalledTimes(1);
  });
  it('should call "calculate" passing the state and buttonName', () => {
    const root = shallow(<App />);
    const instance = root.instance();
    const buttonName = '1';
    const stateObj = { total: '5', next: buttonName, operation: null };
    
    root.setState(stateObj);
    instance.handleClick('1');
    
    expect(calculate).toHaveBeenCalledWith(stateObj, buttonName);
  });
});
  it('should pass the total to the Display component if next is null', () => {
    const root = shallow(<App />);
    root.setState({ total: '7009', next: null });
    const value = root.find({ value: root.state('total') });
    expect(value.length).toBe(1);
  });
  it('should pass the next to the Display component if the value is not null', () => {
    const root = shallow(<App />);
    root.setState({ total: '40', next: '4'  });
    const value = root.find({ value: root.state('next') });
    expect(value.length).toBe(1);
  });

});
