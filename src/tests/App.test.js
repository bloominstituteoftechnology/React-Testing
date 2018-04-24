import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should contain wrapper called component-app', () => {
    const wrapper = shallow(<div className="component-app" />);
    expect(wrapper.find('.other-class').exists()).to.equal(false);
  });
});
