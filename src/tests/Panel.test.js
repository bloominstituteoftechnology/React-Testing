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
  it('should have 19 button compponents', () => {
    const panel = shallow(<Panel />);
    expect(panel.find('Button').length).toEqual(19);
  })
  it('should have 6 divs', () => {
    const panel = shallow(<Panel />);
    expect(panel.find('div').length).toBe(6);
  })
  it('should have a number 7 button', () => {
    const panel = shallow(<Panel name="7" />);
    expect(panel.length).toBe(1);
  })
});