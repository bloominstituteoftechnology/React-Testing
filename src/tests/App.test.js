import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
	});

	it("should set total: 0, next: null, operation: null", () => {
		const wrapper = shallow(<App />)
		const instance = wrapper.instance()

		const total = instance.state.total; 
		const next = instance.state.next;
		const operation = instance.state.operation;

		expect(total).toEqual('0')
		expect(next).toEqual(null)
		expect(operation).toEqual(null)
	})
});
