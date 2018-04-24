import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Display />, div);
	});
	it("should have a class component-display", () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.is(".component-display")).toEqual(true);
	});
	it("should render a value", () => {
		const component = shallow(<Display />);
		expect(component.find("value"));
	});
	it("renders the value as a string", () => {
		const component = shallow(<Display value={`string`} />);
		expect(component.props().children.props.children).toBe(`string`);
	});
	it("should display the value fed to it", () => {
		const wrapper = shallow(<Display value="25" />);
		expect(wrapper.contains(<div>25</div>)).toEqual(true);
	});
});
