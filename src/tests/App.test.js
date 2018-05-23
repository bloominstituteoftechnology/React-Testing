import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a result display and a panel of buttons', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Display').length).toBe(1);
        expect(wrapper.find('Panel').length).toBe(1)
    });

    it('should have a beginning state of total 0', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state().total).toEqual('0');
    });

    it('should have a beginning state of next null', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state().next).toEqual(null);
    });

    it('should have a beginning state of operation null', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.state().operation).toEqual(null);
    });
});