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
  it('should render 19 buttons', () => {
    const panel = shallow(<Panel />)
    const button = panel.find('Button')

    expect(button.length).toEqual(19)
  })
  it('should render with 6 divs', () => {
    const panel = shallow(<Panel />)
    const div = panel.find('div')

    expect(div.length).toEqual(6)
  })
});