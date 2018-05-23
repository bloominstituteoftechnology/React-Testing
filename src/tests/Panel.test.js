import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {

    it('renders without crashing', () => {
        shallow(<Panel/>);
    });

    it('should have a wrapping div with the class name of component-panel', () => {
        const wrapper = shallow(<Panel/>);
        expect(
            wrapper
                .find('div')
                .first()
                .hasClass('component-panel')
        ).toEqual(true);
    });

    it('should have 19 Button', () => {
      const wrapper = shallow(<Panel/>);
      expect(wrapper
          .find('div')
          .children('Button'))
          .toHaveLength(19);
    });
});