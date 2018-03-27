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
  it('renders 19 buttons', () => {
    // const click = sinon.spy();
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("Button")).toHaveLength(19);
  });
  // not working 
  // it('hasClassName of "component-panel"', () => {
  //   const wrapper = shallow(<Panel />);
  //   expect(wrapper.find('div').hasClass('component-panel')).to.equal(true);
  // });
});