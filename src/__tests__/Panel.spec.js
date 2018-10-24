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

  it("confirms panel component correctly displays", () => {
    const shallowWrapper = shallow(<Panel />);
    const elements = shallowWrapper.find("div.component-panel");
    expect(elements.length).toBe(1);
  });

});
