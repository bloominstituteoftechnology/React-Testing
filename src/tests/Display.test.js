import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
    it('renders without crashing', () => {
        shallow(<Display/>);
    });

    it('should contain a wrapping div with the class name component-display', () => {
        const wrapper = shallow(<Display/>);
        expect(
            wrapper
                .find('div')
                .first()
                .hasClass('component-display')
        ).toEqual(true)
    });
});