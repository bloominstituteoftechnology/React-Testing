import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

it('renders without crashing', () => {
        shallow(<Button />);
});


it('should test if a className passed as props exists', () => {
	//const orange=true;
	const app = shallow(<Button orange/>);
	console.log(app.debug());

	expect(app.hasClass('component-button orange')).toEqual(true);
});

});
