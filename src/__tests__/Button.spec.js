import React from 'react';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';
import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});
