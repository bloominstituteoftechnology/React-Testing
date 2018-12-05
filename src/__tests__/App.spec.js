import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	const app = shallow(<App />);
	const instance = app.instance();

	it('both Display and Panel component render', () => {
	});

	it('handleClick function should operate the ', () => {
	});
});
