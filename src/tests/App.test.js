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
    // shallow(<App />); 
  });

  it('It should render exactly two child components.', () => {
    const app = shallow(<App />);

    const display = app.find('Display');
    const panel = app.find('Panel');

    expect(display.length + panel.length).toEqual(2);
  });

  it('It should set state when handleClick is called.', () => {

    const app = shallow(<App />);
    const instance = app.instance();

    expect(instance.state).toEqual({ total: '0', next: null, operation: null });
    instance.handleClick('AC');
    expect(instance.state).toEqual({ total: null, next: null, operation: null });
    instance.handleClick('7');
    expect(instance.state).toEqual({ total: null, next: '7', operation: null })
    instance.handleClick('.');
    expect(instance.state).toEqual({ total: null, next: '7.', operation: null });
  })
});