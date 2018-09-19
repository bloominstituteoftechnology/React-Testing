import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
// components
import Panel from "../components/Panel/Panel";
import App from "../App.js";

describe("<Panel />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Panel />, div);
    });
  });
  describe("initial prop check", () => {
    it("should render all 19 calc button", () => {
      const wrapper = shallow(<Panel />);
      const elements = wrapper.find("Button");

      expect(elements.length).toEqual(19);
    });
    // it("should render all 19 calc button", () => {
    //   const wrapper = shallow(<Panel />);
    //   const elements = wrapper.find("Button");

    //   expect(elements.length).toEqual(19);
    // });
  });
  describe("function checks", () => {
    // it("number button adds to total", () => {
    //   const wrapper = shallow(<Panel />);
    //   const appWrapper = shallow(<App />);
    //   // const instance = wrapper.instance();
    //   const appInstance = appWrapper.instance();
    //   const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    //   let button = wrapper.findWhere(
    //     n => n.name === ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0"),
    //   );
    //   // const button = wrapper.find(numbers);
    //   // for (let i = 0; i < numbers.length; i++) {
    //   //   button = wrapper.findWhere(
    //   //     n => n.prop(".name") === numbers[i],
    //   //   );
    //   // }
    //   button[1].simulate("click");
    //   expect(appInstance.state.total.length).toEqual(
    //     appInstance.state.total.length + 1,
    //   );
    // });
    it("number 1 button changes total", () => {
      const appWrapper = mount(<App />);
      const wrapper = mount(<Panel />);
      const button = wrapper
        .find("Button")
        .filterWhere(item => item.prop("name") === "1");
      button.simulate("click");

      expect(appWrapper.state("next")).toEqual("1");
    });
  });
});
