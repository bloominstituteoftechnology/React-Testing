import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "../testsetup";
import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing and matches the snapshot", () => {
    const comp = shallow(<Button />);
    expect(comp).toMatchSnapshot();
  });

  describe("Prop Tests", () => {
    it("should render with the classNames of 'component-button wide' if we pass in the 'wide' prop from the calling or container component and matches the snapshot", () => {
      const comp = shallow(<Button wide />);
      expect(comp.find(".component-button")).toHaveLength(1);
      expect(comp.find(".wide")).toHaveLength(1);
      expect(comp).toMatchSnapshot();
    });

    it("should render with the classNames of 'component-button orange' if we pass the 'orange' prop from the calling or container component and matches the snapshot", () => {
      const comp = shallow(<Button orange />);
      expect(comp.find(".component-button")).toHaveLength(1);
      expect(comp.find(".orange")).toHaveLength(1);
      expect(comp).toMatchSnapshot();
    });
  });
});
