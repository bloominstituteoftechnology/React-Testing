import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

jest.mock('../logic/calculate');

Enzyme.configure({ adapter: new Adapter() });


describe('<Panel />', () => {

it('renders without crashing', () => {
        shallow(<Panel />);
});

 it('should render the Button components', () => {
      const app = shallow(<Panel />);

      const button = app.find('Button');

      expect(button.length).toBe(19);
    });
  });


