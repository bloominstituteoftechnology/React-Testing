import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel/>)
  });

  it('should have 19 buttons', () => {
    const _Panel = shallow(<Panel/>)
    const buttons = _Panel.find('Button')
    expect(buttons).toHaveLength(19)
  })
});
