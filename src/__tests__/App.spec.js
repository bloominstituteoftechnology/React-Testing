import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App /> rendering', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it("should have a div with classname component-app", () => {
		const wrapper = shallow(<App/>);
		const div = wrapper.find("div.component-app");
		expect(div.exists()).toBe(true);
	});

	it("should render a component called Display", () => {
		const wrapper = shallow(<App/>);
		const display = wrapper.find('Display');
		expect(display.exists()).toBe(true);
	});

	it("should render a component called Panel", () => {
		const wrapper = shallow(<App/>);
		const panel = wrapper.find('Panel');
		expect(panel.exists()).toBe(true);
	});
});

describe('<App /> functionality', () => {
	it("should update state on button click", () => {
		const wrapper = shallow(<App/>);
		const instance = wrapper.instance();
		let buttons = wrapper.find('Panel').dive().find('Button').at(4).dive().find('button');
		buttons.simulate('click');
		expect(instance.state.next).toBe("7");

		buttons = wrapper.find('Panel').dive().find('Button').at(8).dive().find('button');
		buttons.simulate('click');
		expect(instance.state.next).toBe("74");

		buttons = wrapper.find('Panel').dive().find('Button').at(5).dive().find('button');
		buttons.simulate('click');
		expect(instance.state.next).toBe("748");
	})

	it("should add and update state", () => {
		const wrapper = shallow(<App/>);
		const instance = wrapper.instance();
		const buttonPress = (index) => {
			return wrapper.find('Panel').dive().find('Button').at(index).dive().find('button').simulate("click");
		}

		buttonPress(13);
		buttonPress(15);
		buttonPress(13);
		buttonPress(18);
		expect(instance.state.total).toBe("4");
	})

	it("should multiply and update state", () => {
		const wrapper = shallow(<App/>);
		const instance = wrapper.instance();
		const buttonPress = (index) => {
			return wrapper.find('Panel').dive().find('Button').at(index).dive().find('button').simulate("click");
		}

		buttonPress(13);
		buttonPress(7);
		buttonPress(13);
		buttonPress(18);
		expect(instance.state.total).toBe("4");
	})

	it("should divide and update state", () => {
		const wrapper = shallow(<App/>);
		const instance = wrapper.instance();
		const buttonPress = (index) => {
			return wrapper.find('Panel').dive().find('Button').at(index).dive().find('button').simulate("click");
		}

		buttonPress(13);
		buttonPress(3);
		buttonPress(13);
		buttonPress(18);
		expect(instance.state.total).toBe("1");
	})

	it("should subtract and update state", () => {
		const wrapper = shallow(<App/>);
		const instance = wrapper.instance();
		const buttonPress = (index) => {
			return wrapper.find('Panel').dive().find('Button').at(index).dive().find('button').simulate("click");
		}

		buttonPress(13);
		buttonPress(11);
		buttonPress(13);
		buttonPress(18);
		expect(instance.state.total).toBe("0");
	})
});