import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const app = shallow(<Panel />);
  const instance = app.instance();

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Panel />, div);
    shallow(<Panel />);
  });

  it('should have div "component-panel"', () => {
    expect(app.hasClass('component-panel')).toBe(true);
  });
});
