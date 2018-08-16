import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import Display from "../components/Display/Display";
import Panel from "../components/Panel/Panel";
import mockAxios from "../__mocks__/axios";
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
    let wrapper = shallow(<App />);
    let instance = wrapper.instance();

    it('should match snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        // const div = document.createElement('div');
        // ReactDOM.render(<App />, div);
        shallow(<App />);
    });

    it("initial total is 0", () => {
        expect(instance.state.total).toBe("0");
    });

    it("initial next is null", () => {
        expect(instance.state.next).toBe(null);
    });

    it("initial operation is null", () => {
        expect(instance.state.operation).toBe(null);
    });

    it('should have div "component-app"', () => {
        expect(wrapper.hasClass("component-app")).toBe(true);
    });

    // it('should have div "component-app"', () => {
    //   expect(wrapper.find('div.component-app')).toHaveLength(1);
    // });

    // it('should render children', () => {
    //   wrapper = shallow((
    //     <div className="component-app">
    //       <Display />
    //       <Panel />
    //     </div>
    //   ));
    //   expect(wrapper.contains([<Display />, <Panel />])).toBe(true);
    // });

    it("should render children", () => {
        expect(wrapper.find(Display)).toHaveLength(1);
        expect(wrapper.find(Panel)).toHaveLength(1);
    });

    it("should calculate total", () => {
        instance.handleClick("5");
        expect(instance.state.next).toBe("5");
        expect(instance.state.total).toBeNull();
        expect(instance.state.operation).toBeNull();
        instance.handleClick("+");
        expect(instance.state.operation).toBe("+");
        instance.handleClick("5");
        instance.handleClick("=");
        expect(instance.state.total).toBe("10");
    });

    it("fetches data from API", async () => {
        mockAxios.get.mockImplementationOnce(() => {
            Promise.resolve({
                data: {}
            });
        });

        expect(instance.state.data).toHaveLength(10);

        // expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(
            'https://swapi.co/api/people'
        );
    });
});
