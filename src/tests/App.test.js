import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe.only('<App />', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it.skip('shallow renders without crashing', () => {
    shallow(<App />);
  });

  it.skip('should render one Display component', () => {
    const app = shallow(<App />);

    const display = app.find('Display');

    expect(display.length).toEqual(1);
  });

  it('should render one Panel component', () => {
    const app = shallow(<App />);

    const panel = app.find('Panel');

    expect(panel.length).toEqual(1);
  });

  it('should initialize the state to be null or 0', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });
});
