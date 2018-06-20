import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('shallow renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should render 19 Button components', () => {
    const panel = shallow(<Panel />);

    const buttons = panel.find('Button');

    expect(buttons.length).toEqual(19);
  });
});