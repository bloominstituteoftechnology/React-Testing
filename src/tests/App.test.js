import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />); // wrapper for our <COMPONENT />
    expect(wrapper).toHaveLength(1); // check that it is mounting what it should mount bylength
  });

  it('should render a display and a panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display')).toHaveLength(1);
    expect(wrapper.find('Panel')).toHaveLength(1);
  });
});
