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

  it('should have a wrapper div', () => {
    const panel = shallow(<Panel/>);
    expect(panel.find('div').exists()).toBe(true);
  });

  it('should render 19 buttons', () => {
    const panel = shallow(<Panel/>);
    expect(panel.find('Button')).toHaveLength(19);
  });
});
