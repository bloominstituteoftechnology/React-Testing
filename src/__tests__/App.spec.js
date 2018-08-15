import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display.js';
import Panel from '../components/Panel/Panel.js';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
   });

   it('should have default state values total = 0, next and operation = null', () => {
    const app = shallow(<App />); //seems you need this almost every time
    const instance = app.instance();

    expect(instance.state.total).toEqual('0');
    expect(instance.state.next).toBeNull();
    expect(instance.state.operation).toBeNull();
   })

   it('should render a div with class `component-app`', () => {
     const component = shallow(<App />);
     expect(component.find('.component-app')).toHaveLength(1);
   })

   it('should have a `handleClick` method that updates state', () => {
     const component = shallow(<App />);
     const instance = component.instance();
     instance.handleClick('7');
     expect(instance.state.next).toEqual('7');
     expect(instance.state.total).toEqual(null); //Is null but maybe should be zero? Something to look into will need to look at calculate
     expect(instance.state.operation).toBeNull();

   })
});
