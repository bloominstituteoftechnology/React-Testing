import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('debugging test',() => {
    const panel = shallow(<Panel/>);
    expect(panel.length).toBe(1);
    // console.log(panel.debug());
    console.log(panel.childAt(0).debug());
  })
});
