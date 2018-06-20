import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  }); 

  it('look for display', () => {
    const app = shallow(<App />);
    const display = app.find('Display');

    expect(display.length).toEqual(1)

  })

  it('look for panel', () => {
    const app = shallow(<App />);
    const display = app.find('Panel');

    expect(display.length).toEqual(1)

  })

  it('onClick should change state', () => {
    const app = shallow(<App />);
   
    const instance = app.instance()
    instance.handleClick('7')
    expect(instance.state.next).toEqual('7')

  })
});       