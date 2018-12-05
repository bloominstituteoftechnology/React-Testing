import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
    });
    test('matches snapshot', () => {
      const instance = renderer.create(<Panel />);
      const snapshotJson = instance.toJSON();
      expect(snapshotJson).toMatchSnapshot();
    });
    test('calls clickhandler', () => {
        const clickTracker = jest.fn();
        let panelWrapper = shallow(
            <Panel clickHandler={clickTracker}/>,
        );
        let panelInstance = panelWrapper.instance();
        panelInstance.handleClick('anyName');
        expect(clickTracker).toHaveBeenCalledTimes(1);
    });
    test('has all buttons', () => {
        expect(
            shallow(<Panel clickHandler={() => {return}} />)
            .find("Button").length
        ).toBe(19);
    });
});