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
  // it('renders when state changes for App', () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.setState({next: '3'});
  //   expect(wrapper.find(''));

  // });
  it('Should have total state set to 0 when App component mounts', () => {
    const expected = '0';
    const component = shallow(<App />);
    const instance = component.instance();
    expect(instance.state.total).toEqual(expected);
  });
  it('Should have next state set to null when App component mounts', () => {
    const expected = null;
    const component = shallow(<App />);
    const instance = component.instance();
    expect(instance.state.next).toEqual(expected);
  });
  it('Should have total state set to 0 when component mounts', () => {
    const expected = null;
    const component = shallow(<App />);
    const wrapper = shallow(<App />);
    const instance = component.instance();
    expect(instance.state.operation).toEqual(expected);
    console.log('These are the wrapper.state of App: ',wrapper.state());

  });
});