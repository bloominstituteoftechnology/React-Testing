import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, instance } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';
import calculate from '../logic/calculate';

jest.mock('../logic/calculate');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Display component', () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true)
  });

  it('should render Panel component', () => {
    expect(wrapper.containsMatchingElement(<Panel />)).toEqual(true)
  });

  describe('handleClick', () => {
    it('should call "calculate" exactly one time', () => {
      const instance = wrapper.instance();
      const buttonName = 'test';
      instance.handleClick(buttonName);
      expect(calculate).toHaveBeenCalledTimes(1);
    })
    
  it('should call "calculate" passing the state and buttonName', () => {
    const instance = wrapper.instance();
    const buttonName = 'test';
    const stateObject = {total: '3', next: null, operation: null};
    wrapper.setState(stateObject);
    instance.handleClick(buttonName);
    expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
  })

  it('should update state when number is clicked', () => {
    const instance = wrapper.instance();
    instance.handleClick('1');
    expect(wrapper.state('next')).toEqual('1');
  
    instance.handleClick('+');
      expect(wrapper.state('operation')).toEqual('+');
  
    instance.handleClick('2');
      expect(wrapper.state('next')).toEqual('2');
  
    instance.handleClick('=');
      expect(wrapper.state('total')).toEqual('3');
  });
});

it('should pass total to Display component if next is null', () => {
  const instance = wrapper.instance();
  wrapper.setState({total: '7', next: null});
  const value = wrapper.find({value: instance.state.total})
  expect(value.length).toBe(1);
})

describe('Asynchronous tests', () => {
  it('async using callback', done => {
    setTimeout(done, 1000);
  })
})

it('async with promises', () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
})

it('async with async/await', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
})
});

