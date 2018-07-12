import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel.js';
import calculate from '../logic/calculate';
//jest.mock('../logic/calculate');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('total should start at 0', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
    expect(wrapper).toMatchSnapshot();
  });

  it('next should start at null', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.next).toBe(null);
  })

  it('operation should start as null', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance();
    expect(instance.state.operation).toBe(null);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should invoke handleClick method', () => {
  //   const wrapper = shallow(<App/>);
  //   const instance = wrapper.instance();
  //   instance.handleClick();
  //   expect(calculate).toBeCalled();
  // });

  it('should have a div with class component-app', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.component-app')).toHaveLength(1);
  });

  it('should have a `handleClick` method that updates state', () => {
    const component = shallow(<App />);
    const instance = component.instance();
    expect(instance.state.total).toEqual('0');
    instance.handleClick('9');
    //expect(calculate).toBeCalled();
    // console.log(instance.state.next);
    expect(component.state('next')).toEqual("9");
    expect(component.state('operation')).toEqual(null);
    expect(component.state('total')).toEqual(null);
    // why does the above syntax work while the below
    // doesn't? We are accessing an object, after all
    // and everywhere else I've ever accessed an object
    // I've always seen either dot syntax or bracket syntax.
    // expect(component.state.total).toEqual(null);
  });

  
});


