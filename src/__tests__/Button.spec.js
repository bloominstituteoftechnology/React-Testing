import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Button />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it("should render with the classNames of 'component-button orange' if we pass the 'orange' prop from the calling or container component and matches the snapshot", () => {
		const comp = shallow(<Button orange />);
		expect(comp.find(".component-button")).toHaveLength(1);
		expect(comp.find(".orange")).toHaveLength(1);
		expect(comp).toMatchSnapshot();
	});

});
