import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render display component', () => {
    const app = shallow(<App />);
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  })

  it('should render panel component', () => {
    const app = shallow(<App />);
    const panel = app.find('Panel');
    expect(panel.length).toEqual(1);
  })

  it('should have a state with three properties', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(Object.keys(instance.state).length).toEqual(3);
    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  })

  it('should change the state.next to 8 when you click the button labeled 8', () => {
    
    const app = shallow(<App />);
    const instance = app.instance();
    const panelProps = {clickHandle: instance.handleClick}
    const panel = shallow(<Panel {...panelProps} />);
    const panelInstance = panel.instance();
    const props = {name: '8', clickHandler: () => { panelInstance.handleClick('8')}};
    const button = shallow(<Button {...props} />);

    button.simulate('click');
    expect(instance.state.next).toEqual('8');
  })
});


