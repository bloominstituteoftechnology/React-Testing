import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
	});
	it("renders the display", () => {
		const wrapper = shallow(<App />);
		const elements = wrapper.find(".component-app");
		expect(elements.length).toBe(1);
	});
	it("next and operatio should be null by default", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.next).toBe(null);
	});
});
