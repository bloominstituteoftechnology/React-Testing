import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Display />, div);
	});
});

describe("display should be 0 by default", () => {
	it("sets props", () => {
		const wrapper = mount(<Display value={"0"} />);

		expect(wrapper.props().value).toBe("0");

		wrapper.setProps({ value: "trevor" });
		expect(wrapper.props().value).toBe("trevor");
	});

	it("displays div value", () => {
		const wrapper = mount(<Display value="123" />);
		expect(wrapper.find(".component-display div").text()).toBe("123");
	});
});
