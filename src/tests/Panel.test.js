import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should be the same as the snapshot', () => {
    const panel = shallow(<Panel />);
    expect(panel).toMatchSnapshot();
  });

  it('should render a total of 19 buttons on the panel component', () => {
    const buttons = shallow(<Panel />);
    expect(buttons.find('Button')).toHaveLength(19);
  });
});