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

  it('Should have component-panel as main div', () => {
    const panel = shallow(<Panel />)

    expect(panel.find('div').first().hasClass('component-panel')).toEqual(true);
  })

  it('should have 19 button components', () => {
    const panel = shallow(<Panel />);
    expect(panel.find('Button')).toHaveLength(19);
  });
});
