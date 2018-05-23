import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App.js";
import Display from "../components/Display/Display";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
	// test if button renders without crashing
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
	});
	// test if button renders its name
	// it("should have a button name");
	// test if button triggers this.props.handleClick
	it("should trigger this.props.handleClick", () => {
		const handleClick = jest.fn();
		const Btn = shallow(<Button clickHandler={handleClick} />);
		const instance = Btn.instance();
		const button = Btn.find("button");

		button.simulate("click");

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	// test if button changes this.props.name

	// test if button changes Display props

	// it("should change Display props", () => {
	// 	// arrange

	// 	// act
	// 	button.simulate("click");
	// 	// assert
	// 	expect(instance.state).toEqual(prevState);
	// });
});
