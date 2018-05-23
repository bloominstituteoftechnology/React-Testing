import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  // challenge: DRY the tests using beforeEach to instantiate the component
  const component = shallow(<App />);
  const instance = component.instance();
  it("should set isLocked to true when component mounts", () => {
    const expected = "0";

    expect(instance.state.total).toEqual(expected);
  });

  it("should have two children siblings", () => {
    expect(component.find("div").children()).toHaveLength(2);
  });

  // challenge: check that isOpen starts false

  // it('should toggle isLocked when toggleLocked is called', () => {
  //   const component = shallow(<App />);
  //   const instance = component.instance();
  //   // let isLocked = instance.state.isLocked;

  //   instance.toggleLocked();
  //   expect(instance.state.isLocked).toEqual(false);

  //   instance.toggleLocked();
  //   expect(instance.state.isLocked).toEqual(true);

  //   instance.toggleLocked();
  //   expect(instance.state.isLocked).toEqual(false);
  // });

  // challenge: write a test and implementation for toggling isOpen the BDD way

  // it('should show the correct message when clicking the Lock button', () => {
  //   // mock the alert function
  //   window.alert = jest.fn();

  //   const component = shallow(<App />);
  //   const instance = component.instance();
  //   // // let isLocked = instance.state.isLocked;
  //   // const button = component.find('.lock-btn');

  //   // button.simulate('click');

  //   expect(window.alert).toHaveBeenCalledWith('lock button clicked!');
  //   expect(window.alert).toHaveBeenCalledTimes(1);
  // });
});
