import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	
	it('matches snapshot', ()=> {
		const snapshot = renderer.create(<App />).toJSON();

		expect(snapshot).toMatchSnapshot();
	});

});
