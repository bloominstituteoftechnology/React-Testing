import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    it('should contain a div with "component-app" className', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('.component-app')).toHaveLength(1)
    });
    it('should have the "total" property on the state: ', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('total')).toBeTruthy();
    });
})
