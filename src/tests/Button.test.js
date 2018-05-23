import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({adapter: new Adapter()});

describe('<Button />', () => {

    it('renders without crashing', () => {
        shallow(<Button/>);
    });

    it('should have one child button', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper
            .find('div')
            .children('button'))
            .toHaveLength(1);
    });


    it('should have a classname of orange when passed the orange prop', () => {
        const wrapper = shallow(<Button orange/>);
        expect(wrapper
            .find('.orange'))
            .toHaveLength(1);
    });

    it('should have a classname of wide when passed the wide prop', () => {
        const wrapper = shallow(<Button wide/>);
        expect(wrapper
            .find('.wide'))
            .toHaveLength(1);
    });

});