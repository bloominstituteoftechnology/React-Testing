import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

    it('should render something???', ()=> {
      const snapshot = renderer.create(< Display />)
       expect(snapshot).toMatchSnapshot()
    })
});
