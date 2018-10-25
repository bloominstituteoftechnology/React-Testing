import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a div with component-app class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.component-app').length).toBe(1);
  });

  it('renders a Display component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display').length).toBe(1);
  });

  it('renders a Panel component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Panel').length).toBe(1);
  });

  it('initializes state with total:0, next:null, operation:null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBe('0');
    expect(wrapper.state('next')).toBe(null);
    expect(wrapper.state('operation')).toBe(null);
  });

  it('initializes state with total:0, next:null, operation:null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });

  it.only('shows me some props', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.props());
    console.log(wrapper.instance().props);
  });


  //handleClick

  //if state rendered

  //if props


});
