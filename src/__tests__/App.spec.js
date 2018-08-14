import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
 
  it("renders without crashing", () => {
    shallow(<App />);
  });

  describe("checks default state for <App />", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    it("should have total as 0 by default in state", () => {
      expect(instance.state.total).toMatch("0");
    });
    it("should have next as null by default in state", () => {
      expect(instance.state.next).toBe(null);
    });
    it("should have operation as null by default in state", () => {
      expect(instance.state.operation).toBe(null);
    });
  });

  it("should update the next property state with no side effects to the other state", () => {
    const app = shallow(<App />);
    const instance = app.instance();

    instance.handleClick('5');

    expect(app.state('next')).toEqual('5');

    instance.handleClick('4');
    expect(app.state('next')).toEqual('54');

    instance.handleClick('1');
    expect(app.state('next')).toEqual('541');

    expect(app.state('operation')).toBeNull();
    expect(app.state('total')).toBeNull();

  });

  it.skip('should update the operator state and two consecutive operators should not break the app', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    instance.handleClick('+');
    expect(app.state('operation')).toEqual('+');
    instance.handleClick('-');
    expect(app.state('operation')).toEqual('-');
  })

});
