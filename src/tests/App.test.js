import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it.skip('shallow renders without crashing', () => {
    shallow(<App />);
  });
  it.skip('should render exactly one Display component', () => {
    const app = shallow(<App />);
    const Display = app.find('Display');
    expect(Display.length).toEqual(1);
  });
  it('should render exactly one Display component', () => {
    const app = shallow(<App />);
    const Panel = app.find('Panel');
    expect(Panel.length).toEqual(1);
  });
});