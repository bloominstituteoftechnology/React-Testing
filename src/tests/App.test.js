import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have total, next, and operation on state', () => {
    const component = shallow(<App />);
    expect(component.state().total).toBeDefined();
    expect(component.state().next).toBeDefined();
    expect(component.state().operation).toBeDefined();
    // expect(component.state('operation')).toBeDefined(); -- alternative
  });

  it('should render a div class with component-app', () => {
    const component = shallow(<App />);
    expect(component.find('.component-app')).toHaveLength(1);
  });

  it('should render class Panel', () => {
    const component = shallow(<App />);
    expect(component.find('Panel')).toHaveLength(1);
  });

  it('calls the passed in prop function', () => {
    const component = shallow(<App />);
    const test = component.find('Panel');
    console.log(test.Symbol(enzyme.__node__).props.children.props.x);
    expect(test.Symbol(enzyme.__node__).props.children.props.x).toHaveProperty('x', 3);
  });
});

// expect(houseForSale).toHaveProperty('kitchen.area', 20);
// test.Symbol(enzyme.__node__).props.children.props.x