import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import renderer from 'react-test-renderer'; // snapshot
import calculate from '../logic/calculate.js';
import App from '../App';

jest.mock('../logic/calculate.js');
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  // can pass props into <App props={}/>
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

it('should have "total", "next", "operation" in state', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  expect(instance.state.total).toEqual('0');
  expect(instance.state.next).toBeDefined();
  expect(instance.state.total).toBeDefined();
});

it('should have render component-app', () => {
  const component = shallow(<App />);
  expect(component.find('.component-app')).toHaveLength(1);
});

describe('handleClick()', () => {
  it('should call "calculate" exactly one time', () => {
    // to know how many times a function is called
    const root = shallow(<App />);
    const instance = root.instance();
    const buttonName = '3';

    instance.handleClick(buttonName);

    expect(calculate).toHaveBeenCalledTimes(1);
  });

  it('should call "calculate" passing the state and buttonName', () => {
    // to know how many times a function is called
    const root = shallow(<App />);
    const instance = root.instance();
    const buttonName = '3';
    const stateObject = { total: '3', next: null, operation: null };

    root.setState(stateObject);
    instance.handleClick(buttonName);

    expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
  });

  describe('Asynchronous tests', () => {
    it('async using callback', done => {
      // Jest is passing in the `done`
      // axios.get('http://swapi.co/api/people').then(res => {
      //   done();
      // });
      // if done is not called, the test will fail
      setTimeout(done, 1000); // setTimeout will call done after 1s
    });
  });

  it('async with promises', () => {
    // don't forget the return
    return new Promise(resolve => setTimeout(resolve, 1000));
  });

  it('async with async/await', async () => {
    // const response = await axios.get('http://swapi.co/api/people');
    // try {
    //   done();
    // } catch (err) {
    //   done();
    // }
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
});
