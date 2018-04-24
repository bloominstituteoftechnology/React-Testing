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
  it('should have one children to render', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper);
    expect(wrapper).toHaveLength(1);
  });
  it('should have 2 children components to render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').children()).toHaveLength(2);
  });

  it('should have totals initial state of 0 string', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.state());
    expect(wrapper.state().total).toEqual('0');
  });
});
