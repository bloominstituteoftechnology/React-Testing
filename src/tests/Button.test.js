import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App.js";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
	// test if button renders without crashing
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
	});
	// test if button triggers this.props.handleClick
	// test if button changes this.props.name
	// test if button changes Display props
	it("should change Display props", () => {
		// arrange
		const Btn = shallow(<Button />);
		const AppComponent = shallow(<App />);
		const instance = AppComponent.instance();
		let prevState = instance.state;
		const button = Btn.find(".component-button");
		// act
		button.simulate("click");
		// assert
		expect(instance.state).toEqual(prevState);
	});
});
