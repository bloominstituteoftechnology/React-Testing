import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';


describe('<App />', () => {
  const app=shallow(<App />);
  const instance = app.instance();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a Display component', () => {
    const display = app.find('Display');
    expect(display.length).toBe(1);
  })

  it('should render a Panel component', () => {
    const panel = app.find('Panel');
    expect(panel.length).toBe(1);
  })

  it('should have state Total with initial value 0', () => {
    expect(app.state().total).toEqual('0');
  })
  // console.log(instance.state.total);
  console.log(app.state('total'));
});
