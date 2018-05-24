import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should not differ from snapshot', () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });

  it('renders display and panel', () => {
    const app = shallow(<App />); 
    const display = app.find('Display');
    const panel = app.find('Panel');

    expect(display.length).toBe(1);
    expect(panel.length).toBe(1);
  });

  it('updates state correctly for button clicks', () => {
    const app = shallow(<App />); 
    const appInstance = app.instance();

    appInstance.handleClick('1');
    expect(appInstance.state.total).toBe(null);
    expect(appInstance.state.next).toBe('1');
    expect(appInstance.state.operation).toBe(null);

    appInstance.handleClick('+');
    expect(appInstance.state.total).toBe('1');
    expect(appInstance.state.next).toBe(null);
    expect(appInstance.state.operation).toBe('+');

    appInstance.handleClick('2');
    expect(appInstance.state.total).toBe('1');
    expect(appInstance.state.next).toBe('2');
    expect(appInstance.state.operation).toBe('+');

    appInstance.handleClick('=');
    expect(appInstance.state.total).toBe('3');
    expect(appInstance.state.next).toBe(null);
    expect(appInstance.state.operation).toBe(null);
  })
});
