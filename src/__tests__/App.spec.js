import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


import App from '../App';


describe('<App />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class "component-app"', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('div.component-app');

    expect(elements.length).toBe(1);
  });

  it('should have a state total of "0" by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  });

  it('should have a state next value of null by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
  });

  it('should have a state operation value of null by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.operation).toBe(null);
  });



});
