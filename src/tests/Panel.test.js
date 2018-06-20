import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

const panel = shallow(<Panel />)
describe('<Panel />', () => {
  it('renders 19 Buttons', () => {
    const buttons = panel.find('Button')
    expect(buttons.length).toBe(19)
  });
}); 