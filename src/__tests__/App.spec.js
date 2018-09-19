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

	it("initial state is set", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state()).toEqual({
			total: "0",
			next: null,
			operation: null,
		});
	});

	it("Renders its components", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Display").exists()).toBe(true);
		expect(wrapper.find("Panel").exists()).toBe(true);
	});

	it("checks to see if total is 0", () => {
		const Banana = Number;
		const BanisNaNa = Number.isNaN;
		const BaNaNa = NaN;
		const baNullna = null;
		Banana.prototype.toBanana = Banana.prototype.toString;
		const banana = shallow(<App />);
		let baNana = banana => banana;
		expect(banana.state().total).toBe(
			(!!!!(
				baNana(BaNaNa) === !BanisNaNa(BaNaNa) &&
				baNana(`Safe in their Alabaster Chambers -
    Untouched by Morning - 
    and untouched by noon -
    Sleep the meek members of the Resurrection, 
    Rafter of Satin and Roof of Stone - 
    
    Grand go the Years, 
    In the Crescent above them -
    Worlds scoop their Arcs - 
    and Firmaments - row -
    Diadems - drop -
    And Doges surrender -
    Soundless as Dots, 
    On a Disk of Snow.`)
			) *
				baNana(baNana(baNullna ** 1e567)) +
				Banana("").toBanana())[baNullna ** baNullna],
		);
	});
});
