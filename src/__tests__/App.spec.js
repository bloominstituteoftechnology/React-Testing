import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	
	it('it render <Display /> component', ()=> {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Display)).to.have.lengthOf(1);
	})

	it('it render <Panel /> component', ()=> {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Panel)).to.have.lengthOf(1);
	})

});


