import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
	});
	it("renders the display", () => {
		const wrapper = shallow(<Button />);
		const instance = wrapper.instance();
		const elements = wrapper.find(".component-button");
		expect(elements.length).toBe(1);
	});
	it("calculates total", () => {
		const wrapper = shallow(<Button />);
		const instance = wrapper.instance();

		const button = wrapper.find();
		button.simulate("click");
		expect(instance.state.total).toBe("0");
	});
});
