import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});
    test('matches snapshot', () => {
        const instance = renderer.create(
            <Display value="test string" />,
        );
        const snapshotJson = instance.toJSON();
        expect(snapshotJson).toMatchSnapshot();
    });

	it('renders the div with correct class name', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('.component-display');
		expect(display.exists()).toEqual(true);
	});



	it('check the prop', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.props().value).toBe(undefined);});



});
