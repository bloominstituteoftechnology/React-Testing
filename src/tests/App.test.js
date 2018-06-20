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

  it('should have two children', () => {
    const app = shallow(<App />);
    expect(app.find('div').children()).toHaveLength(2);
  });

  it('should render the tag Display', () => {
    const app = shallow(<App />);
    expect(app.find('Display')).toHaveLength(1);
  });

  it('should render the tag Panel', () => {
    const app = shallow(<App />);
    expect(app.find('Panel')).toHaveLength(1);
  });

  it('should have a beginning state of total:0, next:null, and operation:null', () => {
    const app = shallow(<App />);
    expect(app.state().total).toEqual('0');
    expect(app.state().next).toEqual(null);
    expect(app.state().operation).toEqual(null);
  });

  it('should have handleClick method that updates the state', () => {
    const app = shallow(<App />);
    app.instance().handleClick('4');
    expect(app.state('next')).toEqual('4');
    expect(app.state('total')).toBeNull();
    expect(app.state('operation')).toBeNull();
  });
});