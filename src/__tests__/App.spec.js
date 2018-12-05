import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
//import '../setupTests.js'

import App from '../App';

//TEST  FOR  App.js
describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	//Will check this.state.total set to 0
	it("should have the variable 'total' defined and initially set to zero in state", () => {
		  const comp = shallow(<App />);
		  expect(comp.state("total")).toEqual("0");
	});

	it("should have the variables 'operation' and 'next' defined in state", () => {
		const comp = shallow(<App />);
		expect(comp.state("next")).toBeDefined();
		expect(comp.state("operation")).toBeDefined();
	});

});
