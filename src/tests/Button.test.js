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
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
	});
	it("should trigger this.props.handleClick", () => {
		const handleClick = jest.fn();
		const Btn = shallow(<Button clickHandler={handleClick} />);
		const button = Btn.find("button");

		button.simulate("click");

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
