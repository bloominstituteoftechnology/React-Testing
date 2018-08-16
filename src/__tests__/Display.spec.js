import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  
it('renders without crashing', () => {
        shallow(<Display />);
});


it('should render the expected value', () => {
       const value = '10';
    
        const app = shallow(<Display value={value} />);
	//const div = app.find('.component-display').childAt(0).childAt(0);
        const div = app.find('.display-value');
	expect(div.text()).toEqual('10');
        

});

});	
