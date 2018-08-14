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

  it('componentPanel mounts', () => {
    const panelComponent = shallow(<Panel clickHandler = {() => {}} />)
    expect(panelComponent).toBeDefined;
  });

  it('component renders with 19 buttons', () => {
    const panelComponent = shallow(<Panel clickHandler = {() => {}} />)
    const buttons = panelComponent.find('Button');
    expect(buttons).toHaveLength(19);
  });
});
