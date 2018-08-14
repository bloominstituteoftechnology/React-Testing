import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

	
it('renders without crashing', () => {
        shallow(<App />);
});


it('should render a p tag with "Calculator text"', () => {

        const app = shallow(<App />);

        const paragraph = app.find('.calculator-title');
        expect(paragraph.text()).toEqual('Calculator');

});


it('should display total to be 0  by default', () => {
  	const app = shallow(<App />);
  	const instance = app.instance();

  	expect(instance.state.total).toEqual("0");
});	
});
