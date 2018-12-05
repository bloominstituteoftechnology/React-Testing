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
    test('random text', () => {
        const testContents = `Test: ${Math.random()}`;
        const displayWrapper = shallow(
            <Display value={testContents} />,
        );
        expect(displayWrapper.text()).toBe(testContents);
    });
    test('has correct className', () => {
        expect(
            shallow(<Display value="~" />)
            .hasClass('component-display')
        ).toBeTruthy();
    });
});
