import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests.js';

// Components
import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});
