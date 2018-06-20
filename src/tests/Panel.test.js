import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import moduleName from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should render only one panel', () => {
    shallow(<Panel />);
  });

  it('should render exactly one Panel component', () => {
    const panel = shallow(<Panel />);
    const componentPanel = panel.find('.component-panel');
    expect(componentPanel.length).toEqual(1);
  });

  it('should render exactly one Button component', () => {
    const panel = shallow(<Panel />);
    const componentButton = panel.find('Button');
    expect(componentButton.length).toEqual(19);
  });
});
