import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Display />, div);
    });

    it('should display value passed as a props', () => {
        const value = { value: '5' }
        const display = shallow(<Display {...value} />).find('div').at(1)

        expect(display.text()).toEqual('5')
    })
});
