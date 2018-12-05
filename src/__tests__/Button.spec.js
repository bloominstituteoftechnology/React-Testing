import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Button/>).toJSON();
		expect(snapshot).toMatchSnapshot();
	})
});
