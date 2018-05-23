import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  // can only use .simulate() once
  it.skip('spies', () => {
    const spy = sinon.spy();
    const component = shallow(<Panel clickHandler={spy} />);
    component.find('button').simulate('click');
    expect(spy.calledOnce).toBeTruthy();
  })

});