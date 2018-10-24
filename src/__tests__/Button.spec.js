import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing and matches the snapshot", () => {
    const comp = shallow(<Button />);
    expect(comp).toMatchSnapshot();
  });

  describe("Prop Tests", () => {
    it("should render with className 'component-button wide' if we pass in the 'wide' prop from the calling or container component and matches the snapshot", () => {
      const comp = shallow(<Button wide />);
      expect(comp.find(".component-button")).toHaveLength(1);
      expect(comp.find(".wide")).toHaveLength(1);
      expect(comp).toMatchSnapshot();
    });
  });
});
