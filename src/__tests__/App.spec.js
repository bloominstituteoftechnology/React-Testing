import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import Display from "../components/Display/Display";
import Panel from "../components/Panel/Panel";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders Display", () => {
    shallow(<Display />);
  });

  it("renders Panel", () => {
    shallow(<Panel />);
  });

  it("check for state", () => {
	const wrapper = shallow(<App />);
	const state = {
		total: '0',
		next: null,
		operation: null,
	};
	expect(wrapper.state()).toEqual(state);
  });

});


/*

it("", () => {

});

*/