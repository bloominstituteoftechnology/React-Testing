import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import calculate from '../logic/calculate';
import App from "../App";

jest.mock('../logic/calculate.js');
Enzyme.configure({ adapter: new Adapter() });
describe("<App />", () => {
 
  it("renders without crashing", () => {
    shallow(<App />);
  });

 
});
