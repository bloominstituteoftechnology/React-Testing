import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
    test('handles clicks', () => {
        const clickTracker = jest.fn();
        const buttonWrapper = shallow(
            <Button
                clickHandler={clickTracker}
                name="test"
            />,
        );
        const innerButton = buttonWrapper.find('button');
        innerButton.simulate('click');
        expect(clickTracker).toHaveBeenCalledTimes(1);
    });
    test('can be orange (or not)', () => {
        expect(
            shallow(<Button orange />)
            .hasClass('component-button orange')
        );
        expect(
            shallow(<Button />)
            .hasClass('component-button orange')
        ).toBeFalsy();
    });
    test('can be wide (or not)', () => {
        expect(
            shallow(<Button wide />)
            .hasClass('component-button wide')
        );
        expect(
            shallow(<Button />)
            .hasClass('component-button wide')
        ).toBeFalsy();
    });
    test('can be wide and orange', () => {
        expect(
            shallow(<Button wide orange />)
            .hasClass('component-button orange wide')
        );
        expect(
            shallow(<Button orange wide />)
            .hasClass('component-button orange wide')
        );
    });
});
